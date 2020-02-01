import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuthComponent } from "./auth/auth.component";
import { AllOffersMapComponent } from "./all-offers-map/all-offers-map.component";
import { AuthGuard } from "./_guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "auth",
    component: AuthComponent
  },
  {
    path: "offers",
    component: OfferListComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "offers/:offerId",
    component: SingleOfferComponent
    // canActivate: [AuthGuard]
  },
  {
    path: "map",
    component: AllOffersMapComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
