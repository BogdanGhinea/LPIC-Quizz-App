import { TestBed } from '@angular/core/testing';

import { FragenTPService } from './fragen-t-p.service';

describe('FragenTPService', () => {
  let service: FragenTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FragenTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
