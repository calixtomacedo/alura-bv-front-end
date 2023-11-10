import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [

    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input',
      autoria: 'Componente Filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Morbi viverra placerat justo, vel pharetra turpis. In elementis mé pra quem é amistosis quis leo. Diuretics paradis num copo é motivis de denguis. Suco de cevadiss deixa as pessoas mais interessantis. Suco de caniss deixa as pessoas mais interessantis.',
      autoria: 'Mussum',
      modelo: 'modelo1'
    }

  ];
  constructor(){}

  ngOnInit(): void {}


}
