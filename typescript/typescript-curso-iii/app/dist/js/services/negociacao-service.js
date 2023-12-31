import { Negociacao } from "../models/negociacao.js";
export class NegociacaoService {
    obterNegociacoes() {
        return fetch('http://localhost:8080/dados')
            .then(response => response.json())
            .then((dados) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacao-service.js.map