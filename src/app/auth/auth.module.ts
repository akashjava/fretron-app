import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from '@app/shared';

import { LoginComponent } from './component/login/login.component';
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginService} from "./services/login.service";
import { LogoutService } from "./services/logout.service";
import { loginReducer } from "./reducers/login.reducer";
import {  LoginEffects} from "./effects/login.effects";
import { ValidateOtpComponent } from './component/validate-otp/validate-otp.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    SharedModule,
    StoreModule.forRoot({loginReducer}),
    EffectsModule.forRoot([LoginEffects])
  ],
  declarations: [
    LoginComponent,
    ValidateOtpComponent,
    SignUpComponent
  ],
  providers: [LoginService,LogoutService]
})
export class AuthModule {}
