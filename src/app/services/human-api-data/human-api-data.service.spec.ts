import { TestBed } from '@angular/core/testing';

import { HumanApiDataService } from './human-api-data.service';

describe('HumanApiDataService', () => {
  let service: HumanApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HumanApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
