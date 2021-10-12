import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChequebookRequesthistoryComponent } from './customer-chequebook-requesthistory.component';

describe('CustomerChequebookRequesthistoryComponent', () => {
  let component: CustomerChequebookRequesthistoryComponent;
  let fixture: ComponentFixture<CustomerChequebookRequesthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerChequebookRequesthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChequebookRequesthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
