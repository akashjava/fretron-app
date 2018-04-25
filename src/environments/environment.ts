// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const packageJson = require('../../package.json');

export const environment = {
  appName: 'FRETRON-APP',
  // envName: 'DEV',
  production: false,
  // versions: {
  //   app: packageJson.version,
  //   angular: packageJson.dependencies['@angular/core'],
  //   ngrx: packageJson.dependencies['@ngrx/store'],
  //   material: packageJson.dependencies['@angular/material'],
  //   bootstrap: packageJson.dependencies.bootstrap,
  //   rxjs: packageJson.dependencies.rxjs,
  //   angularCli: packageJson.devDependencies['@angular/cli'],
  //   typescript: packageJson.devDependencies['typescript']
  // }
};

export const BASE_IP = {
  IP : 'http://192.168.0.153',
  // IP : 'http://apis.fretron.com'
  // IP : 'http://tracknet.fretron.com'
}

export const paths = {
  "USER_LOGIN" :BASE_IP.IP+"/user/",
  // login/forany
  "SIGN_OTP_PATH" :BASE_IP.IP+"/user/sendotp/forany?mobileNumber=",
  "SIGNUP_PATH" : BASE_IP.IP+"/user/create",
  "CONFIRM_LOGIN_PATH" : BASE_IP.IP+"/user/authentication?mobileNumber=",
  "CREATE_ORGANISATION_PATH" : BASE_IP.IP+"/organisation/create",
  "SWITCH_ORG_PATH": BASE_IP.IP+"/user/switchorg?orgId=",
};

