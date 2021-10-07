import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChequebookRequestComponent } from './customer-chequebook-request.component';

describe('CustomerChequebookRequestComponent', () => {
  let component: CustomerChequebookRequestComponent;
  let fixture: ComponentFixture<CustomerChequebookRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerChequebookRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChequebookRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
