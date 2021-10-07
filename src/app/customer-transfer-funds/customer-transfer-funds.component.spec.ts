import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransferFundsComponent } from './customer-transfer-funds.component';

describe('CustomerTransferFundsComponent', () => {
  let component: CustomerTransferFundsComponent;
  let fixture: ComponentFixture<CustomerTransferFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransferFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransferFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
