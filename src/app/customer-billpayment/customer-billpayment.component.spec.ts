import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillpaymentComponent } from './customer-billpayment.component';

describe('CustomerBillpaymentComponent', () => {
  let component: CustomerBillpaymentComponent;
  let fixture: ComponentFixture<CustomerBillpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
