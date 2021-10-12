import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWithdrawalComponent } from './customer-withdrawal.component';

describe('CustomerWithdrawalComponent', () => {
  let component: CustomerWithdrawalComponent;
  let fixture: ComponentFixture<CustomerWithdrawalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerWithdrawalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWithdrawalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
