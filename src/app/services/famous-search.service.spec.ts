import { TestBed, inject } from '@angular/core/testing';

import { FamousSearchService } from './famous-search.service';

describe('FamousSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamousSearchService]
    });
  });

  it('should be created', inject([FamousSearchService], (service: FamousSearchService) => {
    expect(service).toBeTruthy();
  }));
});
