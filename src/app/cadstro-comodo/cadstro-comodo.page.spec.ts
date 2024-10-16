import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CadstroComodoPage } from './cadstro-comodo.page';

describe('CadstroComodoPage', () => {
  let component: CadstroComodoPage;
  let fixture: ComponentFixture<CadstroComodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadstroComodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
