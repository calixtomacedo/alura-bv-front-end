import { VolumeInfo } from './../../models/interfaces';
import { Subscription } from 'rxjs';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';
import { Livro } from 'src/app/models/interfaces';

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

  public livrosResponseParaLivros(items): Array<Livro> {
    const livros: Array<Livro> = new Array();
    items.forEach(item => {
      livros.push(
        this.livro = {
          title: item.volumeInfo?.title,
          authors: item.volumeInfo?.authors,
          publisher: item.volumeInfo?.publisher,
          publishedDate: item.volumeInfo?.publishedDate,
          description: item.volumeInfo?.description,
          previewLink: item.volumeInfo?.previewLink,
          thumbnail: item.volumeInfo?.imageLinks?.thumbnail
        }
      );
    });
    return livros;
  }

}



