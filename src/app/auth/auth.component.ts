import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, Validators } from "@angular/forms";

import { AuthService } from "../_services/auth.service";
import { IAuth, IRegisterData } from "../_interfaces/auth.interface";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  authForm;
  registerForm;
  inLoginMode = true;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = formBuilder.group({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });

    this.registerForm = formBuilder.group({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  onLoginSubmit(authData: IAuth) {
    if (this.authForm.valid) {
      this.authService.logIn(authData).subscribe(result => console.log(result));
    }
  }

  onRegisterSubmit(authData: IRegisterData) {
    if (this.registerForm.valid) {
      console.log("register", authData);
      this.authService.signUp(authData).subscribe(result =>
        this.authService
          .logIn({
            email: authData.username,
            password: authData.password
          })
          .subscribe(result => {
            this.router.navigate(["/"]);
          })
      );
    }
  }

  switchMode() {
    this.inLoginMode = !this.inLoginMode;
  }
}
