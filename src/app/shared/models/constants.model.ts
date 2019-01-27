export class AppConstant {
    BASE_PROTOCAL_HTTP = window.location.protocol + '//';
    BASE_PROTOCAL_HTTPS = 'https://';
    ICONS_BASE_URL = 'assets/svg-icons/'; 
    SVG_IMG_S3_URL = '';
  
    // need to set a host name, dev host name, qa host name
    PRODUCTION_HOST_NAMES: Array<string> = ['everyulb.netlify.com', ''];
    DEV_HOST_NAME = '';
    QA_HOST_NAME = '';
    LOCAL_HOST_NAME = 'localhost';
    LOCAL_DEV_NAME = 'sites.test';
  
    ENVIRONMENT_STAGING = 'dev';
    ENVIRONMENT_PRODUCTION = 'production';
    ENVIRONMENT_DEV = 'dev';
    ENVIRONMENT_QA = 'qa';
    ENVIRONMENT_LOCAL = 'staging';
  
    EMP_LOGOUT_REDIRECTION_URL_PRO = 'https://everyulb.netlify.com/login'
    EMP_LOGOUT_REDIRECTION_URL_QA = 'https://everyulb.netlify.com/login'
  }
  
  