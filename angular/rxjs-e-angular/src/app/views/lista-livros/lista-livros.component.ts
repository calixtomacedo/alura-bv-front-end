import { Item, VolumeInfo } from './../../models/interfaces';
import { Subscription } from 'rxjs';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Livro } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeeInfo';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: Array<Livro>;
  campoBusca: string = '';
  subscription: Subscription;
  livro: Livro;

  constructor(private service: LivroService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  private ngOndestroy() {
    this.subscription.unsubscribe();
  }

  public buscarLivros() {
    this.subscription = this.service.buscarLivros(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.livrosResponseParaLivros(items);
      },
      error: errorAPI => console.log(errorAPI),
      //complete: () => console.log('Observable completado')
    });
  }

  public livrosResponseParaLivros(items: Array<Item>): Array<LivroVolumeInfo> {
    return items.map(item => {
      return new LivroVolumeInfo(item);
    })
  }

}



