import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTransersPageComponent } from './customer-transers-page.component';

describe('CustomerTransersPageComponent', () => {
  let component: CustomerTransersPageComponent;
  let fixture: ComponentFixture<CustomerTransersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerTransersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTransersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
