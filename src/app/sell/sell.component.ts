import { Component, OnInit } from "@angular/core";
import { OffersService } from "../_services/offers.service";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { IOffer } from "../_interfaces/offer.interface";

@Component({
  selector: "app-sell",
  templateUrl: "./sell.component.html",
  styleUrls: ["./sell.component.scss"]
})
export class SellComponent implements OnInit {
  sellForm;
  constructor(private offersService: OffersService, formBuilder: FormBuilder) {
    this.sellForm = formBuilder.group({
      imageUrl: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
      extendedDescription: new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  onSubmit(offerData: IOffer) {
    this.offersService.addOffer(offerData).subscribe(result => {
      console.log("sold!", result);
      this.sellForm.reset();
    });
  }
}
