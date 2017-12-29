import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';
import { FootballComponent } from './football/football.component';


@NgModule({
  declarations: [
    AppComponent,
    IcehockeyComponent,
    FootballComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
