import { TestBed, inject } from '@angular/core/testing';

import { GetMatchDataSemiFinalService } from './get-match-data-semi-final.service';

describe('GetMatchDataSemiFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMatchDataSemiFinalService]
    });
  });

  it('should be created', inject([GetMatchDataSemiFinalService], (service: GetMatchDataSemiFinalService) => {
    expect(service).toBeTruthy();
  }));
});
