import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as moment from "moment";

import { OffersService } from "../_services/offers.service";
import { IOffer } from "../_interfaces/offer.interface";
import { ShoppingService } from "../_services/shopping.service";

@Component({
  selector: "app-single-offer",
  templateUrl: "./single-offer.component.html",
  styleUrls: ["./single-offer.component.scss"]
})
export class SingleOfferComponent implements OnInit {
  activeOffer: IOffer;
  bought: Boolean = false;

  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private shoppingService: ShoppingService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const offerId: string = params.get("offerId");

      this.offersService.getOffers().subscribe((offers: Array<IOffer>) => {
        this.activeOffer = offers.find(offer => offer._id === offerId);
        this.bought = this.shoppingService.isBought(this.activeOffer);
      });
    });
  }

  buyOffer() {
    this.shoppingService.buy(this.activeOffer);
    this.bought = true;
  }
}
