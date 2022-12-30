import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {SellerBidderDto} from "../../../../shared/models/SellerBidderDto";
import * as L from 'leaflet';
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-seller-element',
  templateUrl: './seller-element.component.html',
  styleUrls: ['./seller-element.component.css']
})
export class SellerElementComponent implements OnInit {

  @Input() advertisement: AdvertisementDto;
  @Input() seller: SellerBidderDto;
  @ViewChild('map-container') mapContainer;
  private map: L.Map;

  constructor(private advertisementService: AdvertisementService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.initMap(this.seller);
  }

  private initMap(seller: SellerBidderDto): void {


    this.advertisementService.getLatLong(seller).subscribe(data => {
      let latitude = data[0].lat;
      let longitude = data[0].lon;

      this.map = L.map('map', {center: [latitude, longitude], zoom: 13});

      const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      const circle = L.circle([latitude, longitude], {
        color: '#1B3F92',
        fillColor: '#FE7060',
        fillOpacity: 0.5,
        radius: 250
      });

      tiles.addTo(this.map)
      circle.addTo(this.map)
    })
  }


}
