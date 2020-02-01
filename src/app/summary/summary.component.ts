import { Component, OnInit } from "@angular/core";
import { ShoppingService } from "../_services/shopping.service";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  visibleOffers;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.shoppingService.getBought().subscribe(result => {
      console.log(result);
      this.visibleOffers = result;
    });
  }
}
