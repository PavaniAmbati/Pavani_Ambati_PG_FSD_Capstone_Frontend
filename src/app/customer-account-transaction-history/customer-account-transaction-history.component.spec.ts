import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountTransactionHistoryComponent } from './customer-account-transaction-history.component';

describe('CustomerAccountTransactionHistoryComponent', () => {
  let component: CustomerAccountTransactionHistoryComponent;
  let fixture: ComponentFixture<CustomerAccountTransactionHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountTransactionHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
