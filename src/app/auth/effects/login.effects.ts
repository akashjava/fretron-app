import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect,ofType} from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { LoginService } from "../services/login.service";
import {
  tap,
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  catchError
} from 'rxjs/operators';

import {AuthActionType,
        GetUserAction,
        ExistingUserAction,
        NewUserAction,
        SignupAction,
        SignupFailedAction,        
        SubmitOtpForLoginAction,
        SubmitOtpForSignUpAction,
        LoginSuccessAction,
        LoginFailedAction,
        InvalidOtpAction
      }from "../action/auth.action";
@Injectable()
export class LoginEffects {
  constructor(
    private actions$: Actions<Action>,
    private loginService:LoginService,
  ) {}

  @Effect()
  getUser$: Observable<Action> =this.actions$.pipe(
    ofType(AuthActionType.LOGINACTION),
      switchMap((action :any) =>{
        return this.loginService.getUser(action.payload)
          .pipe(
            map(response =>{
             return  response['status']==200?(response['userType']=="existing"? new ExistingUserAction(response):new NewUserAction(response)):new LoginFailedAction({});
            }),
            catchError(error =>
              of(new LoginFailedAction({}) )
            )
          )}
      )
    );

  @Effect()
  sendOtp$: Observable<Action> =this.actions$.pipe(
    ofType(AuthActionType.SUBMITOTPFORLOGINACTION),
      switchMap((action :any) =>{
        console.log(action);
        return this.loginService.userLogin({mobileNumber:action.payload.mobileNumber,otp:action.payload.otp})
          .pipe(
            map(response =>{
              return response['status']==200?new LoginSuccessAction(response):new InvalidOtpAction({});
            }),
            catchError(error =>
              of(new LoginFailedAction({}) )
            )
          )
      }
      )
    );
  
}
