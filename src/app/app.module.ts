import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';
import { FootballComponent } from './football/football.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {Configuration} from './app.constants';
import {DataServiceService} from './data-service.service';

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
  providers: [Configuration, DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
