import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { StorageService } from './storage.service';
import { DomainService } from './domain.service';


@Injectable()
export class ClientService {

  signin(url, data) {
    return this.http.post(url, data)
      .map((res: Response) => JSON.parse(((<any>res)._body)) );
  }
  constructor(private http: Http, private httpClient: HttpClient, private domain: DomainService, 
    private storage: StorageService) { }

  
  getLatestToken(){
    const url = this.domain.getTokenUrl();
    const data = {
      grant_type: 'refresh_token',
      refresh_token: this.storage.retrieveAuthToken()
    };
    const headers = new Headers({'Authorization': 'Basic ' +
    btoa(this.storage.retrieveAuthToken() + ':' + this.storage.retrieveAuthToken() )});
    const options = new RequestOptions({headers: headers});
    return this.http.post(url, data, { headers: headers} )
      .map((response: Response) => {
        return JSON.parse(((<any>response)._body));
      });
  }

  ajaxCall(headers, method='post', url, data) {
    if(!headers) {
      headers = new HttpHeaders();
    }
    return this.httpClient.request(method, url, {
      headers: headers,
      body: data
    });
  }

  getAllComponents() {
    return this.httpClient.get(this.domain.getTokenUrl() + 'components');
  }

}
