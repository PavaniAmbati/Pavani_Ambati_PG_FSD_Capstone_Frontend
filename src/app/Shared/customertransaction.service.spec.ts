import { TestBed } from '@angular/core/testing';

import { CustomertransactionService } from './customertransaction.service';

describe('CustomertransactionService', () => {
  let service: CustomertransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomertransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
