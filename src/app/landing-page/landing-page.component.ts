import { Component, OnInit } from "@angular/core";

import { OffersService } from "../_services/offers.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  offers;

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }
}
