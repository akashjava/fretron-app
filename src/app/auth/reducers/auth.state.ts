
export interface User {
  mobileNumber : number;
  email:string;
  otp:string;
  onBoardingType:string;
  name:string;
} 
export const initialUserState: User = {
  mobileNumber:null,
  email:null,
  name:null,
  otp:null,
  onBoardingType:null
};
export interface AuthState {
    loginSucess : boolean;
    loginInProgress	: boolean;
    loginFailed : boolean;
    signUpSucess : boolean;
    signUpInProgress : boolean;
    token :	string;
    isAuthenticated : boolean;
    logoutSuccess : boolean;
    error : string;
    user:User;
  } 
  

  export const initialState: AuthState = {
    loginSucess: false,
    loginInProgress	:false,
    loginFailed:false,
    signUpSucess : false,
    signUpInProgress :false,
    token :	null,
    isAuthenticated :false,
    logoutSuccess :false,
    error : null,
    user:initialUserState,
  }
  
  