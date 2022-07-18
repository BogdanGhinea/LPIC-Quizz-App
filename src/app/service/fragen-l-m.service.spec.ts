import { TestBed } from '@angular/core/testing';

import { FragenLMService } from './fragen-l-m.service';

describe('FragenLMService', () => {
  let service: FragenLMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FragenLMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
