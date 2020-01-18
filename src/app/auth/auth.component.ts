import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../_services/auth.service";
import { IAuth } from "../_interfaces/auth.interface";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  authForm;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.authForm = formBuilder.group({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit(authData: IAuth) {
    if (this.authForm.valid) {
      this.authService.logIn(authData).subscribe(result => console.log(result));
    }
  }
}
