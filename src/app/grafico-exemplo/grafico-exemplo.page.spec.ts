import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GraficoExemploPage } from './grafico-exemplo.page';
import { IonicModule } from '@ionic/angular'; 

describe('GraficoExemploPage', () => {
  let component: GraficoExemploPage;
  let fixture: ComponentFixture<GraficoExemploPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GraficoExemploPage],
      imports: [IonicModule.forRoot()] 
    }).compileComponents();

    fixture = TestBed.createComponent(GraficoExemploPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});