import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations:[PickupCallPage],
      imports: [
              IonicModule.forRoot(),
              AppRoutingModule
            ]
    }).compileComponents();
    fixture = TestBed.createComponent(PickupCallPage);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should direct to home page', () => {
    spyOn(router, 'navigate');

    component.newPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
