import { TestBed } from '@angular/core/testing';

import { HumanApiService } from './human-api.service';

describe('HumanApiService', () => {
  let service: HumanApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
