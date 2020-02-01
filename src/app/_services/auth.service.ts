import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as path from "path";
import { IAuth, IRegisterData } from "../_interfaces/auth.interface";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  authEndpoint = `${environment.API_ENDPOINT}/api/auth`;

  constructor(private http: HttpClient) {}

  logIn(authData: IAuth): Observable<any> {
    const loginPath = path.join(this.authEndpoint, "signin");
    return this.http
      .post(loginPath, {
        password: authData.password,
        usernameOrEmail: authData.email
      })
      .pipe(
        tap(result => {
          const { accessToken } = result;
          localStorage.setItem("access_token", accessToken);
        })
      );
  }

  logOut() {
    localStorage.removeItem("access_token");
  }

  signUp(authData: IRegisterData): Observable<any> {
    const signUpPath = path.join(this.authEndpoint, "signup");

    return this.http.post(signUpPath, {
      email: authData.email,
      name: authData.name,
      password: authData.password,
      username: authData.username
    });
  }

  isAuthenticated(): boolean {
    // TODO
    return false;
  }
}
