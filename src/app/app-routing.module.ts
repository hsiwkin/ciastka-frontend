import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuthComponent } from "./auth/auth.component";
import { MapComponent } from "./map/map.component";

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
  },
  {
    path: "offers/:offerId",
    component: SingleOfferComponent
  },
  {
    path: "map",
    component: MapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
