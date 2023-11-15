import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-paginas',
  templateUrl: './botao-carregar-paginas.component.html',
  styleUrls: ['./botao-carregar-paginas.component.css']
})
export class BotaoCarregarPaginasComponent implements OnInit {

  @Input()
  haMaisPensamentos: boolean = false;

  constructor() {}

  ngOnInit(): void {  }

}
