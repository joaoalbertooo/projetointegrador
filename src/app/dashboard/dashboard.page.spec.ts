import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DashboardPage } from './dashboard.page';
import { IonicModule } from '@ionic/angular'; 

describe('DashboardPage', () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPage],
      imports: [IonicModule.forRoot()] 
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
