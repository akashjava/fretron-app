import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { GetUserAction } from "../../action/auth.action";
import { Router} from '@angular/router';
import {  AuthState} from "../../reducers/auth.state";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public mobileNo:number;
  public authState:AuthState;
  constructor(private _store:Store<any>,private _router:Router) { }

  ngOnInit() {
       this._store.select('loginReducer').subscribe(value => {
        this.authState=value;
        console.log(value)
        if(this.authState['loginInProgress'])
            this._router.navigate(['/login/validateotp']);
        if(this.authState['signUpInProgress'])
            this._router.navigate(['/login/signup'])
    });
  }
  login(){
    let reqObj={
      loginType:"fretron",
      mobileNumber:""+this.mobileNo
    }
    this._store.dispatch(new GetUserAction(reqObj))
  }

}
