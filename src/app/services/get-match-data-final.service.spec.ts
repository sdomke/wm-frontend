import { TestBed, inject } from '@angular/core/testing';

import { GetMatchDataFinalService } from './get-match-data-final.service';

describe('GetMatchDataFinalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMatchDataFinalService]
    });
  });

  it('should be created', inject([GetMatchDataFinalService], (service: GetMatchDataFinalService) => {
    expect(service).toBeTruthy();
  }));
});
