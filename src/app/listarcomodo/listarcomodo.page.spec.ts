import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarcomodoPage } from './listarcomodo.page';

describe('ListarcomodoPage', () => {
  let component: ListarcomodoPage;
  let fixture: ComponentFixture<ListarcomodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListarcomodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
