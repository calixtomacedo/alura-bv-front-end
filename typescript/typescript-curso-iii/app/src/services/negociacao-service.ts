import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoService {

    public obterNegociacoes(): Promise<Array<Negociacao>> {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            //.then((dados: Array<any>) => {
            .then((dados: Array<NegociacaoDoDia>) => {
                return dados.map(dado => {
                    return new Negociacao(
                        new Date(),
                        dado.vezes,
                        dado.montante
                    )
                })
            })
    }
}