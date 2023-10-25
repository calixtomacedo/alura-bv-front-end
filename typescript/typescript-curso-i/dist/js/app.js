import { NegociacaoController } from './controllers/negociacao-controller.js';
import { Negociacao } from './models/negociacao.js';
const negociacao = new Negociacao(new Date(), 10, 1000);
/*
console.log(negociacao);
console.log(negociacao.data);
console.log(negociacao.quantidade);
console.log(negociacao.valor);
console.log(negociacao.volume);
*/
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
