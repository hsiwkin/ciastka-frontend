import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class OffersService {
  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get("/assets/mocks/offers.json");
  }
}
