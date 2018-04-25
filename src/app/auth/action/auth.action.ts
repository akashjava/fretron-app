import { Injectable } from '@angular/core';
import { Action} from "@ngrx/store";
// @Injectable()
export enum AuthActionType {
   LOGINACTION='[auth] loginAction',
   LOGINFAILEDACTION='[auth] loginFailedAction',
   LOGINSUCCESSACTION='[auth] loginSuccessAction',
   EXISTINGUSERACTION='[auth] existingUserAction',
   NEWUSERACTION='[auth] newUserAction',

   SIGNUPACTION='[auth] signUpAction',
   SIGNUPFAILEDACTION='[auth] signUpFailedAction',
   SIGNUPSUCCESSACTION='[auth] signUpSuccessAction',
  
   SUBMITOTPFORSIGNUPACTION='[auth] submitOtpForSignUpAction',
   SUBMITOTPFORLOGINACTION='[auth] submitOtpForLoginAction',
  
   INVALIDOTPACTION='[auth] invalidOtpAction', 
  
   LOGOUTACTION='[auth] logoutAction',
   LOGOUTSUCCESSACTION='[auth] logoutSuccessAction',
}

  export class GetUserAction implements Action{
    readonly type=AuthActionType.LOGINACTION;
    constructor(public payload:any){}
  }
  export class ExistingUserAction implements Action{
    readonly type=AuthActionType.EXISTINGUSERACTION;
    constructor(public payload:any){}
  }
   
  export class NewUserAction implements Action{
    readonly type=AuthActionType.NEWUSERACTION;
    constructor(public payload:any){}
  }
  export class LoginSuccessAction implements Action{
    readonly type=AuthActionType.LOGINSUCCESSACTION;
    constructor(public payload:any){}
  }

  export class LoginFailedAction implements Action{
    readonly type=AuthActionType.LOGINFAILEDACTION;
    constructor(public payload:any){}
  }
  export class SubmitOtpForLoginAction implements Action{
    readonly type=AuthActionType.SUBMITOTPFORLOGINACTION;
    constructor(public payload:any){}
  }
  export class SignupAction implements Action{
    readonly type=AuthActionType.SIGNUPACTION;
    constructor(public payload:any){}
  }
  export class SignupFailedAction implements Action{
    readonly type=AuthActionType.SIGNUPFAILEDACTION;
    constructor(public payload:any){}
  }
  export class SubmitOtpForSignUpAction implements Action{
    readonly type=AuthActionType.SUBMITOTPFORSIGNUPACTION;
    constructor(public payload:any){}
  }
  export class InvalidOtpAction implements Action{
    readonly type=AuthActionType.INVALIDOTPACTION;
    constructor(public payload:any){}
  } 

  export type AuthActions=GetUserAction
                  | ExistingUserAction
                  | NewUserAction
                  | LoginSuccessAction
                  | LoginFailedAction
                  | SignupAction
                  | SignupFailedAction
                  | SubmitOtpForLoginAction
                  | SubmitOtpForSignUpAction
                  | InvalidOtpAction ;
