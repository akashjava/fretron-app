import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LogoutService {
  constructor(private http: Http) {}

  logout(symbol: string): Observable<any> {
    return this.http.get("")
      .pipe(
        map((stock: any) => ({ })
      )
      );
  }
}