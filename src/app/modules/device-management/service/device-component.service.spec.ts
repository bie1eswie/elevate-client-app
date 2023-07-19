import { TestBed } from '@angular/core/testing';

import { DeviceComponentService } from './device-component.service';

describe('DeviceComponentService', () => {
  let service: DeviceComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeviceComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
