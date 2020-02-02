import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { IAuth } from "../_interfaces/auth.interface";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  authForm;
  inLoginMode = true;

  constructor(
    formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.authForm = formBuilder.group({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit(authData: IAuth) {
    if (this.authForm.valid) {
      if (this.inLoginMode) {
        this.authService
          .logIn({
            username: authData.username,
            password: authData.password
          })
          .subscribe(result => this.router.navigate(["/"]));
      } else {
        this.authService.signUp(authData).subscribe(result =>
          this.authService
            .logIn({
              username: authData.username,
              password: authData.password
            })
            .subscribe(result => {
              this.router.navigate(["/"]);
            })
        );
      }
    }
  }

  switchMode() {
    this.inLoginMode = !this.inLoginMode;
  }
}
