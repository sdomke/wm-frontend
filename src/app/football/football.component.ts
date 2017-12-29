import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface MatchResponse {
  LeagueName: string;
  GroupName: string;
}

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css']
})

export class FootballComponent implements OnInit {

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    this.http.get<MatchResponse>
    ('https://www.openligadb.de/api/getmatchdata/45581').subscribe(data => {
      console.log(data);
    });
  }

}
