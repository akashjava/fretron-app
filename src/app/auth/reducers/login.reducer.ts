import { Action } from '@ngrx/store';
import { AuthState,initialState } from "./auth.state";
import { AuthActionType,AuthActions} from "../action/auth.action";

// export const selectorStocks = state => state.examples.stocks;

export function loginReducer(state: AuthState=initialState,action:AuthActions): AuthState {
  switch (action.type) {
    case AuthActionType.LOGINACTION:
      return {...state,
              user:{mobileNumber:action.payload.mobileNumber,
              email:null,
              name:null,
              otp:null,
              onBoardingType:action.payload.loginType
              }
            };
    case AuthActionType.EXISTINGUSERACTION:
      return {...state,
              user:{mobileNumber:action.payload.mobileNumber,
              email:null,
              name:null,
              otp:action.payload.otp,
              onBoardingType:action.payload.loginType
              },
              loginInProgress:true
            };
    case AuthActionType.NEWUSERACTION:
      return {...state,
              user:{mobileNumber:action.payload.mobileNumber,
              email:null,
              name:null,
              otp:null,
              onBoardingType:action.payload.loginType
              },
              signUpInProgress:true,
              loginInProgress:false
            };
    case AuthActionType.EXISTINGUSERACTION:
      return {...state,
              user:{mobileNumber:action.payload.mobileNumber,
              email:null,
              name:null,
              otp:action.payload.otp,
              onBoardingType:action.payload.loginType
              },
              loginInProgress:true
            };
    case AuthActionType.LOGINSUCCESSACTION:
      return {...state,
              loginInProgress:false,
              token:action.payload.token,
              loginSucess:true,
              error:null
            };
    case AuthActionType.LOGINFAILEDACTION:
      return  {...state,
              loginFailed:true,
              error:"Login failed"
            };
    
    case AuthActionType.SUBMITOTPFORLOGINACTION:
      return {...state,
              loginInProgress:true
            };
    case AuthActionType.INVALIDOTPACTION:
      return {...state,
              error:"Invalid Otp"
            };
    case AuthActionType.SUBMITOTPFORSIGNUPACTION:
      return {...state,
              user:{mobileNumber:action.payload.mobileNumber,
              email:action.payload.email,
              name:action.payload.name,
              otp:null,
              onBoardingType:action.payload.loginType
              }
            };
    default :
      return {...state };
  }
}