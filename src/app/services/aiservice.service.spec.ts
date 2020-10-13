import { TestBed } from '@angular/core/testing';

import { AIServiceService } from './aiservice.service';

describe('AIServiceService', () => {
  let service: AIServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
