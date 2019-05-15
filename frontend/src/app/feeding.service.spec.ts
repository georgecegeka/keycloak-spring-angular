import { TestBed } from '@angular/core/testing';

import { FeedingService } from './feeding.service';

describe('FeedingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeedingService = TestBed.get(FeedingService);
    expect(service).toBeTruthy();
  });
});
