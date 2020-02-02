import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from "@auth0/angular-jwt";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuthComponent } from "./auth/auth.component";
import { MapComponent } from "./map/map.component";
import { AllOffersMapComponent } from "./all-offers-map/all-offers-map.component";
import { SummaryComponent } from "./summary/summary.component";

export function tokenGetter() {
  return localStorage.getItem("access_token");
}

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    OfferListComponent,
    SingleOfferComponent,
    AuthComponent,
    MapComponent,
    AllOffersMapComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          "localhost",
          "http://localhost",
          "localhost:5000",
          "http://localhost:5000"
        ]
      }
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
