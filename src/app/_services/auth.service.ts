import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as path from "path";
import { IAuth } from "../_interfaces/auth.interface";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  API_ENDPOINT: string = "https://ciastkazonback.herokuapp.com/api/auth";

  constructor(private http: HttpClient) {}

  logIn(authData: IAuth): Observable<any> {
    const loginPath = path.join(this.API_ENDPOINT, "signin");
    return this.http
      .post(loginPath, {
        password: authData.password,
        usernameOrEmail: authData.email
      })
      .pipe(
        tap(result => {
          // TODO
          console.log("handle hash", result);
        })
      );
  }

  signUp(authData: IAuth): Observable<any> {
    // TODO
    return null;
  }
}
