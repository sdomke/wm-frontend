import { Component, OnInit } from '@angular/core';
// import { DataServiceService } from '../data-service.service';

import { HttpClient } from '@angular/common/http';
import { Configuration } from '../app.constants';

@Component({
  selector: 'app-icehockey',
  templateUrl: './icehockey.component.html',
  styleUrls: ['./icehockey.component.css']
})
export class IcehockeyComponent implements OnInit {

  public message: string;
  public values: any[];

  private actionUrl = 'https://www.openligadb.de/api/getavailableteams/EHWM/2017/'

  constructor(private http: HttpClient) { }

  /*constructor(private _dataService: DataServiceService) {
    this.message = 'Hello from HomeComponent constructor';
  }*/

  ngOnInit() {

    this.http.get(this.actionUrl).subscribe(( data: any[]) => this.values = data);

    /*
    this._dataService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.values = data,
        error => () => {
          console.log('error', 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all values complete');
        });
        */
  }

}
