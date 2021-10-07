import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillpaymentsPageComponent } from './customer-billpayments-page.component';

describe('CustomerBillpaymentsPageComponent', () => {
  let component: CustomerBillpaymentsPageComponent;
  let fixture: ComponentFixture<CustomerBillpaymentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillpaymentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillpaymentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
