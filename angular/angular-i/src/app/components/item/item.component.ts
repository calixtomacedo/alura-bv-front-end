import { Component, EventEmitter, Input, OnChanges, OnInit, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  item!: Item;

  @Output()
  emitindoItemParaEditar = new EventEmitter();

  @Output()
  emitindoIdParaDeletar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void {  }

  ngOnChanges(changes: SimpleChanges): void {  }

  ngOnDestroy(): void {
    console.log('Conseguiram me calar');
  }

  public editarItem() {
    this.emitindoItemParaEditar.emit(this.item);
  }

  public checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }

  public deletarItem() {
    console.log('Estão tentando me calar: '+this.item.id);
    this.emitindoIdParaDeletar.emit(this.item.id);
  }



}
