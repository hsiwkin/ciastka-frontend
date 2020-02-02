import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as path from "path";
import { IAuth } from "../_interfaces/auth.interface";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authEndpoint = `${environment.API_ENDPOINT}/api`;

  constructor(private http: HttpClient) {}

  logIn(authData: IAuth): Observable<any> {
    const loginPath = `${this.authEndpoint}/login`;
    return this.http
      .post(loginPath, {
        password: authData.password,
        username: authData.username
      })
      .pipe(
        tap(result => {
          const { token } = result;
          localStorage.setItem("access_token", token);
        })
      );
  }

  logOut() {
    localStorage.removeItem("access_token");
  }

  signUp(authData: IAuth): Observable<any> {
    const signUpPath = path.join(this.authEndpoint, "register");

    return this.http.post(signUpPath, {
      password: authData.password,
      username: authData.username
    });
  }

  isAuthenticated(): boolean {
    // TODO
    return false;
  }
}
