import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransferHistoryComponent } from './customer-transfer-history.component';

describe('CustomerTransferHistoryComponent', () => {
  let component: CustomerTransferHistoryComponent;
  let fixture: ComponentFixture<CustomerTransferHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransferHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransferHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
