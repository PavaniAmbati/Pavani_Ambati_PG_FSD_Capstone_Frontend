import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminChequeBookAuthComponent } from './admin-cheque-book-auth.component';

describe('AdminChequeBookAuthComponent', () => {
  let component: AdminChequeBookAuthComponent;
  let fixture: ComponentFixture<AdminChequeBookAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminChequeBookAuthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminChequeBookAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
