import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  public listar(pagina: number, filtro: string): Observable<Array<Pensamento>> {
    const itensPorPagina = 6;
    let params = new HttpParams()
      .set("_page", pagina)
      .set("_limit", itensPorPagina)

      if(filtro.trim().length > 2) {
        params = params.set("q", filtro)
      }

    return this.http.get<Array<Pensamento>>(this.API, { params })
  }

  public buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }

  public excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }


}
