import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { AuthGuardService } from '@app/core';
import { LoginComponent} from "./component/login/login.component";
import { ValidateOtpComponent } from "./component/validate-otp/validate-otp.component";
import { SignUpComponent } from "./component/sign-up/sign-up.component";
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'validateotp',
    component: ValidateOtpComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
