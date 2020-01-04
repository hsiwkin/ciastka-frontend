import { Component, OnInit } from "@angular/core";
import { OffersService } from "../_services/offers.service";

@Component({
  selector: "app-offer-list",
  templateUrl: "./offer-list.component.html",
  styleUrls: ["./offer-list.component.scss"]
})
export class OfferListComponent implements OnInit {
  offers;

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }
}
