import { TestBed, inject } from '@angular/core/testing';

import { GetMatchDataQuaterFinalsService } from './get-match-data-quater-finals.service';

describe('GetMatchDataQuaterFinalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMatchDataQuaterFinalsService]
    });
  });

  it('should be created', inject([GetMatchDataQuaterFinalsService], (service: GetMatchDataQuaterFinalsService) => {
    expect(service).toBeTruthy();
  }));
});
