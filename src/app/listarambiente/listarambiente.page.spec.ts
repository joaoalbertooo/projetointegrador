import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarambientePage } from './listarambiente.page';

describe('ListarambientePage', () => {
  let component: ListarambientePage;
  let fixture: ComponentFixture<ListarambientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarambientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
