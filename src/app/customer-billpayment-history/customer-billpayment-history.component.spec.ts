import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBillpaymentHistoryComponent } from './customer-billpayment-history.component';

describe('CustomerBillpaymentHistoryComponent', () => {
  let component: CustomerBillpaymentHistoryComponent;
  let fixture: ComponentFixture<CustomerBillpaymentHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBillpaymentHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBillpaymentHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
