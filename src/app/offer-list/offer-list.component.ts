import { Component, OnInit } from "@angular/core";
import { offers } from "../offers";

@Component({
  selector: "app-offer-list",
  templateUrl: "./offer-list.component.html",
  styleUrls: ["./offer-list.component.scss"]
})
export class OfferListComponent implements OnInit {
  offers = offers;

  constructor() {}

  ngOnInit() {}
}
