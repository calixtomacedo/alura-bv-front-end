import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoCarregarPaginasComponent } from './botao-carregar-paginas.component';

describe('BotaoCarregarPaginasComponent', () => {
  let component: BotaoCarregarPaginasComponent;
  let fixture: ComponentFixture<BotaoCarregarPaginasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotaoCarregarPaginasComponent]
    });
    fixture = TestBed.createComponent(BotaoCarregarPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
