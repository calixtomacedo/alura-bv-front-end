import { Item, LivrosResultado } from './../../models/interfaces';
import { EMPTY, catchError, debounceTime, filter, map, of, switchMap, tap, throwError } from 'rxjs';
import { LivroService } from './../../service/livro.service';
import { Component } from '@angular/core';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeeInfo';
import { FormControl } from '@angular/forms';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  campoBusca = new FormControl();
  mensagemErro = '';
  livrosResultado: LivrosResultado;

  constructor(private service: LivroService) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  totalDeLivros$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 2),
    tap(() => console.log('Fluxo inicial')),
    switchMap(valorDigitado => this.service.buscarLivros(valorDigitado)),
    map(response => this.livrosResultado = response),
    catchError(error => {
      console.log(error)
      return of();
    })
  )

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 2),
    tap(() => console.log('Fluxo inicial')),
    switchMap(valorDigitado => this.service.buscarLivros(valorDigitado)),
    tap((response) => console.log(response)),
    map(result => result.items ?? []),
    map(items => this.livrosResponseParaLivros(items)),
    /*
    catchError(() => {
      this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!'
      return EMPTY;
    })
    */
    catchError(error => {
      console.log(error)
      return throwError(() => new Error(this.mensagemErro = 'Ops, ocorreu um erro. Recarregue a aplicação!'));
    })

  )

  public livrosResponseParaLivros(items: Array<Item>): Array<LivroVolumeInfo> {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



