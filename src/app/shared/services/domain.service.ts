import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import {StorageService} from "./storage.service";

@Injectable()
export class DomainService {
  listOfBaseURL = new Map<string, string>();
  baseUrl = '';
  tokenUrl = '';
  redirectUrl = '';
  selection = new SelectionModel<any>(true, []);

  public authToken = '';
  public access_token = '';

  public environment = "";

  constructor(private storage: StorageService) {
  
    if(window.location.host.indexOf('localhost') > -1 || window.location.host.indexOf('qa') > -1 || window.location.host.indexOf('sites') > -1) {
      this.environment = 'qa';
    } else {
      this.environment = '';
    }
    this.listOfBaseURL.set('employerqa', 'https://practical-goldwasser-513c87.netlify.com');
    this.setBaseUrl();

    if(!this.environment) {
      console.warn = function () {};
    }

    
  }

  setBaseUrl() {
    this.baseUrl = this.listOfBaseURL.get('employer' + this.environment) ;
  }

  getTokenUrl(): string {
    return this.baseUrl + '';
  }
}
