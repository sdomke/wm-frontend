import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';
import { FootballComponent } from './football/football.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {GetAvailableTeams, GetMatchDataFinal, GetMatchDataQuaterFinals, GetMatchDataSemiFinal} from './constants/app.constants';
import {GetAvailableTeamsService} from './services/get-available-teams.service';
import {GetMatchDataQuaterFinalsService} from './services/get-match-data-quater-finals.service';
import {GetMatchDataSemiFinalService} from './services/get-match-data-semi-final.service';
import {GetMatchDataFinalService} from './services/get-match-data-final.service';

@NgModule({
  declarations: [
    AppComponent,
    IcehockeyComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GetAvailableTeams,
    GetMatchDataQuaterFinals,
    GetMatchDataSemiFinal,
    GetMatchDataFinal,
    GetAvailableTeamsService,
    GetMatchDataQuaterFinalsService,
    GetMatchDataSemiFinalService,
    GetMatchDataFinalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
