import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarequipamentoPage } from './listarequipamento.page';

describe('ListarequipamentoPage', () => {
  let component: ListarequipamentoPage;
  let fixture: ComponentFixture<ListarequipamentoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarequipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
