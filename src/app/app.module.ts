import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { OfferListComponent } from "./offer-list/offer-list.component";
import { SingleOfferComponent } from "./single-offer/single-offer.component";
import { AuthComponent } from "./auth/auth.component";
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LandingPageComponent,
    OfferListComponent,
    SingleOfferComponent,
    AuthComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
