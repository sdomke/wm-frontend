import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'https://www.openligadb.de/';
  public ApiUrl = 'api/getavailableteams/EHWM/2017/';
  public ServerWithApiUrl = this.Server + this.ApiUrl;
}
