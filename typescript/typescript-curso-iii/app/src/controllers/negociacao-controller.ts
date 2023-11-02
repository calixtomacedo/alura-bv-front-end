
import { domInjector } from '../decorators/dom-injector.js';
import { inspect } from '../decorators/inspect.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { Negociacao } from '../models/negociacao.js';
import { Negociacoes } from '../models/negociacoes.js';
import { NegociacaoService } from '../services/negociacao-service.js';
import { imprimir } from '../utils/imprimir.js';
import { MensagemView } from '../views/mensagem-view.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController {
    
    @domInjector('#data')
    private inputData: HTMLInputElement;

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;

    @domInjector('#valor')
    private inputValor: HTMLInputElement;

    private negociacoes = new Negociacoes();
    //private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacaoService = new NegociacaoService(); 

    constructor() {
        //this.inputData = document.querySelector('#data') as HTMLInputElement;
        //this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        //this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
    }

    @inspect()
    @logarTempoDeExecucao()
    public adiciona(): void {
        const negociacao = Negociacao.build(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if(this.ehDiaUltil(negociacao.data)){
            this.negociacoes.adiciona(negociacao);
           
            imprimir(negociacao, this.negociacoes);
           
            this.negociacoesView.update(this.negociacoes);
            this.mensagemView.update('Negociação adicionada com sucesso');
            this.limparFormulario();
        } else{
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas');
        }

    }

    public importaDados(): void {
        this.negociacaoService.obterNegociacoes()
        .then(negociacoesResponse => {
            return negociacoesResponse.filter(negociacaoResponse => {
                return !this.negociacoes
                .lista()
                .some(negociacao => negociacao.validaIgualdade(negociacaoResponse))
            })
        })
        .then(negociacoesResponse => {
            negociacoesResponse.forEach(negResponse =>{
                this.negociacoes.adiciona(negResponse);
            })
            this.negociacoesView.update(this.negociacoes);
        });
    }

    private ehDiaUltil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
