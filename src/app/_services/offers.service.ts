import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import * as moment from "moment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

import { IOffer } from "../_interfaces/offer.interface";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers(page: number = 0, size: number = 30): Observable<Array<IOffer>> {
    const params = new HttpParams()
      .set("page", "" + page)
      .set("size", "" + size);

    return this.http
      .get(`${environment.API_ENDPOINT}/api/offers`, {
        params
      })
      .pipe(
        map((offers: any) => {
          return offers.content.map(offer => {
            offer.updatedAt = moment(offer.updatedAt, "DD.MM.YYYY", "pl");
            offer.location = [offer.xloc, offer.yloc];
            return offer;
          });
        })
      );
  }
}
