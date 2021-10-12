import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountdetailsComponent } from './customer-accountdetails.component';

describe('CustomerAccountdetailsComponent', () => {
  let component: CustomerAccountdetailsComponent;
  let fixture: ComponentFixture<CustomerAccountdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAccountdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
