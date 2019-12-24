import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";

const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "offers",
    component: OfferListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
