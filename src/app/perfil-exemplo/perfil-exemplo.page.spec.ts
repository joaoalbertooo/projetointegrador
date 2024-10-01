import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilExemploPage } from './perfil-exemplo.page';

describe('PerfilExemploPage', () => {
  let component: PerfilExemploPage;
  let fixture: ComponentFixture<PerfilExemploPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PerfilExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
