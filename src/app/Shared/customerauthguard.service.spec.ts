import { TestBed } from '@angular/core/testing';

import { CustomerauthguardService } from './customerauthguard.service';

describe('CustomerauthguardService', () => {
  let service: CustomerauthguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerauthguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
