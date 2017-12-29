import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FootballComponent } from './football/football.component';
import { IcehockeyComponent } from './icehockey/icehockey.component';

const routes: Routes = [
  { path: 'football', component: FootballComponent},
  { path: 'icehockey', component: IcehockeyComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
