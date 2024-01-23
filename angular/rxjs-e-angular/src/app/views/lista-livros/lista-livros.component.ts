import { Item } from './../../models/interfaces';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';
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

  constructor(private service: LivroService) { }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 2),
    tap(() => console.log('Fluxo inicial')),
    switchMap(valorDigitado => this.service.buscarLivros(valorDigitado)),
    tap((response) => console.log(response)),
    map(items => this.livrosResponseParaLivros(items))
  )

  public livrosResponseParaLivros(items: Array<Item>): Array<LivroVolumeInfo> {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



