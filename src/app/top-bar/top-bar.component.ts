import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"]
})
export class TopBarComponent implements OnInit {
  userName;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.userName = "Test user";
  }

  logOut() {
    this.authService.logOut();
    this.router.navigateByUrl("/auth");
  }
}
