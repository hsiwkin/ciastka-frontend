import { Component, OnInit } from "@angular/core";
import { OffersService } from "../_services/offers.service";

@Component({
  selector: "app-offer-list",
  templateUrl: "./offer-list.component.html",
  styleUrls: ["./offer-list.component.scss"]
})
export class OfferListComponent implements OnInit {
  offers = [];
  visibleOffers = [];

  constructor(private offersService: OffersService) {}

  ngOnInit() {
    this.offersService.getOffers().subscribe(offers => {
      this.offers = offers;
      this.visibleOffers = [...offers];
    });
  }

  onFilterChange(value) {
    const regExp = new RegExp(value, "i");
    this.visibleOffers = this.offers.filter(offer => {
      return (
        regExp.test(offer.title) ||
        regExp.test(offer.description) ||
        regExp.test(offer.extendedDescription)
      );
    });
  }
}
