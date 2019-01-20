import {Injectable} from '@angular/core';
import { AppConstant } from '../models/constants.model';

@Injectable()
export class EnvironmentService {

  devHostName: any = '';
  qaHostName: any = '';
  productionHostNames: any;
  localHostName: any = '';
  localTestSite: any = '';

  constructor(private _const: AppConstant) {
    this.productionHostNames = this._const.PRODUCTION_HOST_NAMES;
    this.devHostName = this._const.DEV_HOST_NAME;
    this.qaHostName = this._const.QA_HOST_NAME;
    this.localHostName = this._const.LOCAL_HOST_NAME;
    this.localTestSite = this._const.LOCAL_DEV_NAME;
  }

  getLogoutRedirectionUrl() {
    if (this.isProductionEnvironment() === true) {
      return this._const.EMP_LOGOUT_REDIRECTION_URL_PRO;
    }else {
      return this._const.EMP_LOGOUT_REDIRECTION_URL_QA;
    }
  }

  isProductionEnvironment() {
    if (this.productionHostNames.indexOf(window.location.hostname) !== -1) {
      return true;
    } else {
      return false;
    }
  }
}
