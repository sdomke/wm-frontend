import { Component, OnInit } from '@angular/core';
import { GetAvailableTeamsService } from '../services/get-available-teams.service';
import { GetMatchDataQuaterFinalsService} from '../services/get-match-data-quater-finals.service';
import { GetMatchDataSemiFinalService } from '../services/get-match-data-semi-final.service';
import { GetMatchDataFinalService } from '../services/get-match-data-final.service';

@Component({
  selector: 'app-icehockey',
  templateUrl: './icehockey.component.html',
  styleUrls: ['./icehockey.component.css']
})
export class IcehockeyComponent implements OnInit {

  public message: string;
  public availableTeams: any[];
  public matchDataQuaterFinals: any[];
  public matchDataSemiFinal: any[];
  public matchDataFinal: any[];

  constructor(
    private _getAvailableTeamsService: GetAvailableTeamsService,
    private _getMatchDataQuaterFinals: GetMatchDataQuaterFinalsService,
    private _getMatchDataSemiFinal: GetMatchDataSemiFinalService,
    private _getMatchDataFinal: GetMatchDataFinalService
  ) {}

  ngOnInit() {
    this._getAvailableTeamsService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.availableTeams = data,
        error => () => {
          console.log(error, 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all availableTeams complete');
        });

    this._getMatchDataQuaterFinals
      .getAll<any[]>()
      .subscribe((data: any[]) => this.matchDataQuaterFinals = data,
        error => () => {
          console.log(error, 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all availableTeams complete');
        });

    this._getMatchDataSemiFinal
      .getAll<any[]>()
      .subscribe((data: any[]) => this.matchDataSemiFinal = data,
        error => () => {
          console.log(error, 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all availableTeams complete');
        });

    this._getMatchDataFinal
      .getAll<any[]>()
      .subscribe((data: any[]) => this.matchDataFinal = data,
        error => () => {
          console.log(error, 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all availableTeams complete');
        });
  }

}
