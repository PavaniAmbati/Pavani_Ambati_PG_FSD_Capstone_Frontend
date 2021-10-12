import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMoneytransferComponent } from './customer-moneytransfer.component';

describe('CustomerMoneytransferComponent', () => {
  let component: CustomerMoneytransferComponent;
  let fixture: ComponentFixture<CustomerMoneytransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerMoneytransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMoneytransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
