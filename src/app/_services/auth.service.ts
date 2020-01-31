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
  constructor(private http: HttpClient) {}

  logIn(authData: IAuth): Observable<any> {
    const loginPath = path.join(`${environment}/api/auth`, "signin");
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

  signUp(authData: IAuth): Observable<any> {
    // TODO
    return null;
  }
}
