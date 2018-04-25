import { Injectable } from '@angular/core';
import { Http,RequestMethod, RequestOptions, RequestOptionsArgs,Headers} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { paths} from "../../../environments/environment";

@Injectable()
export class LoginService {
  constructor(private http: Http) {}

 getUser(reqObj):Observable<any>
  {
    let path=paths.USER_LOGIN+'login/forany'
    let headers = new Headers();
    console.log(reqObj);
    headers.set('Content-Type', 'application/json');
    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      body: reqObj,
    });
    return this.http.request(path, requestOptions).pipe(
      map((response) => {
        console.log(response);
          return response.json();
      })
    )
  }
 userLogin(reqObj){
    let path=paths.USER_LOGIN+'authentication?mobileNumber='+reqObj['mobileNumber']+"&otp="+reqObj['otp'];
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Get,
      headers: headers,
    });

    return this.http.request(path,requestOptions).pipe(
      map((response) => {
        console.log(response);
          return response.json();
      })
    )
  }

  newUser(reqObj):Observable<any>
  {
    let path=paths.USER_LOGIN+'create'
    let headers = new Headers();
    console.log(reqObj);
    headers.set('Content-Type', 'application/json');
    let requestOptions: RequestOptionsArgs = new RequestOptions({
      method: RequestMethod.Post,
      headers: headers,
      body: reqObj,
    });
    return this.http.request(path, requestOptions).pipe(
      map((response) => {
        console.log(response);
          return response.json();
      })
    )
  }
   
}
