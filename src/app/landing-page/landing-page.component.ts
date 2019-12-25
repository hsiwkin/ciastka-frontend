import { Component, OnInit } from "@angular/core";
import { offers } from "../offers";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  offers = offers;

  constructor() {}

  ngOnInit() {}
}
