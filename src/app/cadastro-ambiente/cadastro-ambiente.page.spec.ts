import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroAmbientePage } from './cadastro-ambiente.page';

describe('CadastroAmbientePage', () => {
  let component: CadastroAmbientePage;
  let fixture: ComponentFixture<CadastroAmbientePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroAmbientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
