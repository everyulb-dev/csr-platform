import { Injectable }     from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from "./storage.service";
import { DomainService } from './domain.service';
import { EnvironmentService } from './environment.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private storage: StorageService, private router: Router, 
    private domain: DomainService, private environment: EnvironmentService){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    // let userObj = this.storage.retrieveUser();

    if(this.storage.retrieveAccessToken() && this.storage.retrieveAuthToken()){
      return true;
    }else{  
      let url = new URL(window.location.href);
      if(url.hash) {
        this.domain.redirectUrl = state.url;
        this.storage.storeRedirectUrl();
      }
      let webportalUrl = this.environment.getLogoutRedirectionUrl();
      let win = window.open(webportalUrl, '_self');
      win.focus();
      return false;
    }
  }
}