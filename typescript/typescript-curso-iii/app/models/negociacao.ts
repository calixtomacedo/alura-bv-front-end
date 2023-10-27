export class Negociacao {
    
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data(): Date {
        const data = new Date(this._data.getTime());
        return data;
    }

    public static build(dataString: string, quantString: string, valorString: string): Negociacao { 
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}