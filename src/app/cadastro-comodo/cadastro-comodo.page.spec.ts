import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadastroComodoPage } from './cadastro-comodo.page';

describe('CadastroComodoPage', () => {
  let component: CadastroComodoPage;
  let fixture: ComponentFixture<CadastroComodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadastroComodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
