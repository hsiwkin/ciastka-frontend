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
    const bought: Array<number> = this.getBoughtIds();
    bought.push(offer.id);

    localStorage.setItem(this.boughtProductsKey, JSON.stringify(bought));
  }

  isBought(offer: IOffer): Boolean {
    return Boolean(this.getBoughtIds().find(elemId => elemId === offer.id));
  }

  getBoughtIds(): Array<number> {
    const bought: Array<number> = JSON.parse(
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
          offers.filter(offer => boughtIds.find(id => offer.id === id))
        )
      );
  }
}
