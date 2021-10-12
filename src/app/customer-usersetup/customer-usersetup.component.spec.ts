import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUsersetupComponent } from './customer-usersetup.component';

describe('CustomerUsersetupComponent', () => {
  let component: CustomerUsersetupComponent;
  let fixture: ComponentFixture<CustomerUsersetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerUsersetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUsersetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
