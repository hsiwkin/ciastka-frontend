import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { IOffer } from "../_interfaces/offer.interface";
import { OffersService } from "./offers.service";

@Injectable({
  providedIn: "root"
})
export class ShoppingService {
  boughtProductsKey = "bought";

  constructor(private offersService: OffersService) {}

  buy(offer: IOffer) {
    const bought: Array<string> = this.getBoughtIds();
    bought.push(offer._id);

    localStorage.setItem(this.boughtProductsKey, JSON.stringify(bought));
  }

  isBought(offer: IOffer): Boolean {
    return Boolean(this.getBoughtIds().find(elemId => elemId === offer._id));
  }

  getBoughtIds(): Array<string> {
    const bought: Array<string> = JSON.parse(
      localStorage.getItem(this.boughtProductsKey)
    );

    return bought || [];
  }

  getBought() {
    const boughtIds = this.getBoughtIds();

    return this.offersService
      .getOffers()
      .pipe(
        map(offers =>
          offers.filter(offer => boughtIds.find(id => offer._id === id))
        )
      );
  }
}
