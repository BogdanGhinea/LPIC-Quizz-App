import { TestBed } from '@angular/core/testing';

import { FragenVPService } from './fragen-v-p.service';

describe('FragenVPService', () => {
  let service: FragenVPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FragenVPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
