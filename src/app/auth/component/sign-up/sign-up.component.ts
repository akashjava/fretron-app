import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { SignupAction } from "../../action/auth.action";
import { Router} from '@angular/router';
import {  AuthState} from "../../reducers/auth.state";


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  public name:string;
  public email:string;
  public mobileNumber:number;
  public authState:AuthState;
  
  
  constructor(private _store:Store<any>,private _router:Router) { }

  ngOnInit() {
    this._store.select('loginReducer').subscribe(value => {
      this.authState=value;
      console.log(value)
      if(this.authState['signUpInProgress']){
        this.mobileNumber=this.authState['user']['mobileNumber']
      }
  });
  }

  signup(){
    let reqObj ={
      "onBoardingType":this.authState['user']['onBoardingType'],
      "email":this.email,
      "mobileNumber":this.mobileNumber,
      "name":this.name,
      "otpType":'signup'
    };
    this._store.dispatch(new SignupAction(reqObj))
  }

}
