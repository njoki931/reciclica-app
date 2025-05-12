import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

 beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[RegisterPage],
      imports: [
              IonicModule.forRoot(),
              AppRoutingModule
            ]
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterPage);
        router = TestBed.inject(Router);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register button should direct to login page', () => {
    spyOn(router, 'navigate');

    component.onRegister();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
