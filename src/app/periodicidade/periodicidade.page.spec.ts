import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PeriodicidadePage } from './periodicidade.page';

describe('PeriodicidadePage', () => {
  let component: PeriodicidadePage;
  let fixture: ComponentFixture<PeriodicidadePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PeriodicidadePage ],
      imports: [IonicModule.forRoot(), FormsModule] // Certifique-se de importar Ionic e FormsModule
    }).compileComponents();

    fixture = TestBed.createComponent(PeriodicidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Adicione mais testes se necessário, como o cálculo da emissão de carbono
});

