import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[HomePage],
      imports: [
              IonicModule.forRoot(),
              AppRoutingModule
            ]
    }).compileComponents();
    fixture = TestBed.createComponent(HomePage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to pickup calls page on see all', () => {
    spyOn(router, 'navigate');

    component.onClickSeeAll();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });

   it('should direct to create new pickup call on create pickup call', () => {
    spyOn(router, 'navigate');

    component.onClickCreateNewCall();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });
});
