import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerManagerComponent } from './admin-customer-manager.component';

describe('AdminCustomerManagerComponent', () => {
  let component: AdminCustomerManagerComponent;
  let fixture: ComponentFixture<AdminCustomerManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCustomerManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
