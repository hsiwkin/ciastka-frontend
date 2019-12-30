import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  authForm;

  constructor(private formBuilder: FormBuilder) {
    this.authForm = formBuilder.group({
      email: "",
      password: ""
    });
  }

  ngOnInit() {}

  onSubmit(authData) {
    console.log("submit", authData);
    // TODO: connect with server
  }
}
