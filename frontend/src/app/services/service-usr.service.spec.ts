import { TestBed } from '@angular/core/testing';

import { ServiceUsrService } from './service-usr.service';

describe('ServiceUsrService', () => {
  let service: ServiceUsrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUsrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
