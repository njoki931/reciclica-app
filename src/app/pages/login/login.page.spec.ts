import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { LoginPage } from './login.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[LoginPage],
      imports: [
              IonicModule.forRoot(),
              AppRoutingModule
            ]
    }).compileComponents();
    fixture = TestBed.createComponent(LoginPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create form', () => {
    component.ngOnInit();

    expect(true).toBeFalsy();

  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login button should direct to home page', () => {
    spyOn(router, 'navigate');

    component.login();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('register button should direct to register page', () => {
    spyOn(router, 'navigate');

    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['register']);
  });

  
});
