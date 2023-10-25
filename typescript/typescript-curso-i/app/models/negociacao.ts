export class Negociacao {

    /*
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
    constructor(data: Date, quantidade: number, valor: number){
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    */

    constructor(
        private _data: Date, 
        private _quantidade: number,
        private _valor: number
    ){}

    get data(): Date {
        return new Date(this._data.getTime());
    }

    get quantidade(): number {
        return this._quantidade;
    }

    get valor(): number {
        return this._valor;
    }

    get volume(): number {
        return this._quantidade * this._valor;
    }

}