import { LivroService } from './../../service/livro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];

  campoBusca: string = '';

  constructor(private service: LivroService) { }

  public buscarLivros() {
    this.service.buscarLivros(this.campoBusca).subscribe(
      (responseAPI) => console.log(responseAPI),
      (error) => console.log(error)
    );
  }

}



