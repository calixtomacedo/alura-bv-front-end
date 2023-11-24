import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { join } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Array<Item> = []

  constructor() {
    this.listaDeCompra = JSON.parse(localStorage.getItem('itens') || '[]');
  }

  public getListaDeCompra() {
    return this.listaDeCompra;
  }

  public adicionarItemNaLista(nmItem: string) {
    const item = this.criarItem(nmItem);
    this.listaDeCompra.push(item);
    //this.atualizarLocalStorage(); substituido pelo o uso do DoCheck
  }

  public editarItemDaLista(itemAntigo: Item, nmItem: string) {
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nmItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    this.listaDeCompra.splice(Number(id)-1, 1, itemEditado);
    //this.atualizarLocalStorage();
  }

  private criarItem(nmItem: string) {
    const id = this.listaDeCompra.length + 1;
    const item: Item = {
      id: id,
      nome: nmItem,
      data: new Date().toLocaleString('pt-BR'),
      comprado: false
    }
    return item;
  }

  public atualizarLocalStorage() {
    localStorage.setItem('itens', JSON.stringify(this.listaDeCompra));
  }


}
