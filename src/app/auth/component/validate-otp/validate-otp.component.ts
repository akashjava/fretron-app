import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { SubmitOtpForLoginAction } from "../../action/auth.action";
import { Router} from '@angular/router';
import {  AuthState} from "../../reducers/auth.state";

@Component({
  selector: 'validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {

  constructor(private _store:Store<any>,private _router:Router) { }
 public otp:string;
 public mobileNumber:any;
 public authState:AuthState;
  ngOnInit() {
    this._store.select('loginReducer').subscribe(value => {
      this.authState=value;
      console.log(value)
      if(this.authState['loginInProgress']){
        this.mobileNumber=value['user']['mobileNumber']
      }
    });
  }
  submitOtp(){
    this._store.dispatch(new SubmitOtpForLoginAction({mobileNumber:this.mobileNumber,otp:this.otp,}))
  }

}
