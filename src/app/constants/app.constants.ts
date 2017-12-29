import { Injectable } from '@angular/core';

@Injectable()
export class GetAvailableTeams {
  public Server = 'https://www.openligadb.de/';
  public ApiUrl = 'api/getavailableteams/EHWM/2017/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}

@Injectable()
export class GetMatchDataQuaterFinals {
  public Server = 'https://www.openligadb.de/';
  public ApiUrl = 'api/getmatchdata/EHWM/2017/4';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}

@Injectable()
export class GetMatchDataSemiFinal {
  public Server = 'https://www.openligadb.de/';
  public ApiUrl = 'api/getmatchdata/EHWM/2017/5';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}

@Injectable()
export class GetMatchDataFinal {
  public Server = 'https://www.openligadb.de/';
  public ApiUrl = 'api/getmatchdata/EHWM/2017/6';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
