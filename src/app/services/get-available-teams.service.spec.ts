import { TestBed, inject } from '@angular/core/testing';

import { GetAvailableTeamsService } from './get-available-teams.service';

describe('GetAvailableTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAvailableTeamsService]
    });
  });

  it('should be created', inject([GetAvailableTeamsService], (service: GetAvailableTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
