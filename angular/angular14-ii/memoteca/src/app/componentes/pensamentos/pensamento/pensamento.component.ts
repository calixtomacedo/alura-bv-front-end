import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input()
  pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Calixto Macedo',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService){}

  ngOnInit(): void {}

  public larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256 ) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }

  public mudarIconeFavorito(): string {
    return this.pensamento.favorito == false ? 'inativo' : 'ativo';
  }

  public atualizarFavoritos() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }

}
