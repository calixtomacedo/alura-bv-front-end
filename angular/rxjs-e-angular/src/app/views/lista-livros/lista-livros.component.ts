import { Subscription } from 'rxjs';
import { LivroService } from './../../service/livro.service';
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  campoBusca: string = '';
  subscription: Subscription;

  constructor(private service: LivroService) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  public buscarLivros() {
    this.subscription = this.service.buscarLivros(this.campoBusca).subscribe({
      next: responseAPI => console.log(responseAPI),
      error: errorAPI => console.log(errorAPI),
      complete: () => console.log('Observable completado')
    });
  }

  private ngOndestroy() {
    this.subscription.unsubscribe();
  }

}



