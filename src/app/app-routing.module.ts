import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AllOffersMapComponent } from "./all-offers-map/all-offers-map.component";
import { AuthComponent } from "./auth/auth.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { SummaryComponent } from "./summary/summary.component";

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
  },
  {
    path: "summary",
    component: SummaryComponent
    // canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
