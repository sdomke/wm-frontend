import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';


@NgModule({
  declarations: [
    AppComponent,
    IcehockeyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
