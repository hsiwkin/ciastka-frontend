import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as moment from "moment";
import { map } from "rxjs/operators";

import { IOffer } from "../_interfaces/offer.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers(): Observable<Array<IOffer>> {
    return this.http.get("/assets/mocks/offers.json").pipe(
      map((offers: any) => {
        return offers.map(offer => {
          offer.updatedAt = moment(offer.updatedAt, "DD.MM.YYYY", "pl");
          return offer;
        });
      })
    );
  }
}
