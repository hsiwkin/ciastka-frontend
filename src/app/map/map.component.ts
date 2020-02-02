import { Component, OnInit, Input, OnChanges } from "@angular/core";
import * as L from "leaflet";
import { icon, Marker } from "leaflet";
const iconRetinaUrl = "assets/marker-icon-2x.png";
const iconUrl = "assets/marker-icon.png";
const shadowUrl = "assets/marker-shadow.png";
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent implements OnInit, OnChanges {
  @Input() pointerLocations: Array<[number, number]>;

  private map;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.pointerLocations
      .filter(location => {
        return (
          location &&
          location.length === 2 &&
          location[0] !== null &&
          location[1] !== null
        );
      })
      .forEach(location => {
        L.marker(location).addTo(this.map);
      });
  }

  private initMap(): void {
    this.map = L.map("map", {
      center: [52.237049, 21.017532],
      zoom: 10
    });

    const tiles = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }
    );

    tiles.addTo(this.map);
  }
}
