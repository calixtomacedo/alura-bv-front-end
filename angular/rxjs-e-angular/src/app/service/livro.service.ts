import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  // https://developers.google.com/books
  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  public buscarLivros(valorDigitado: string): Observable<LivrosResultado> {
    const params = new HttpParams().append('q', valorDigitado);
    return this.http.get<LivrosResultado>(this.API, {params})
    /*
    .pipe(
      //tap((responseAPI) => console.log('Fluxo do tap: ', responseAPI)),
      map(result => result.items ?? []),
      //tap(result => console.log('Fluxo após o map: ', result))
    );
    */
  }
}
