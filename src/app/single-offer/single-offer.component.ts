import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

import { OffersService } from "../_services/offers.service";
import { IOffer } from "../_interfaces/offer.interface";

@Component({
  selector: "app-single-offer",
  templateUrl: "./single-offer.component.html",
  styleUrls: ["./single-offer.component.scss"]
})
export class SingleOfferComponent implements OnInit {
  activeOffer: IOffer;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const offerId: number = +params.get("offerId");

      this.offersService.getOffers().subscribe((offers: Array<IOffer>) => {
        this.activeOffer = offers.find(offer => offer.id === offerId);

        console.log(this.activeOffer.updatedAt);
      });
    });
  }
}
