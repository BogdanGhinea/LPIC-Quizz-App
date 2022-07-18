import { TestBed } from '@angular/core/testing';

import { KontakteService } from './kontakte.service';

describe('KontakteService', () => {
  let service: KontakteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KontakteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
