import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-icehockey',
  templateUrl: './icehockey.component.html',
  styleUrls: ['./icehockey.component.css']
})
export class IcehockeyComponent implements OnInit {

  public message: string;
  public values: any[];

  constructor(private _dataService: DataServiceService) {
    this.message = 'Hello from HomeComponent constructor';
  }

  ngOnInit() {
    this._dataService
      .getAll<any[]>()
      .subscribe((data: any[]) => this.values = data,
        error => () => {
          console.log('error', 'Damn', 'Something went wrong...');
        },
        () => {
          console.log('success', 'Complete', 'Getting all values complete');
        });
  }

}
