import { Component, OnInit } from "@angular/core";
import { OffersService } from "../_services/offers.service";
import { IOffer } from "../_interfaces/offer.interface";

@Component({
  selector: "app-all-offers-map",
  templateUrl: "./all-offers-map.component.html",
  styleUrls: ["./all-offers-map.component.scss"]
})
export class AllOffersMapComponent implements OnInit {
  locations: Array<[number, number]> = [];

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offersService
      .getOffers()
      .subscribe(
        offers => (this.locations = offers.map(offer => offer.location))
      );
  }
}
