import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransactionhistoryComponent } from './customer-transactionhistory.component';

describe('CustomerTransactionhistoryComponent', () => {
  let component: CustomerTransactionhistoryComponent;
  let fixture: ComponentFixture<CustomerTransactionhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransactionhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransactionhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
