import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {SellerBidderDto} from "../../../../shared/models/SellerBidderDto";
import * as L from 'leaflet';
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";

@Component({
  selector: 'app-seller-element',
  templateUrl: './seller-element.component.html',
  styleUrls: ['./seller-element.component.css']
})
export class SellerElementComponent implements OnInit {

  @Input() advertisement: AdvertisementDto;
  @Input() seller: SellerBidderDto;
  private map;

  constructor(private advertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
    this.initMap(this.seller);
  }

  private initMap(seller: SellerBidderDto): void {

    this.advertisementService.getLatLong(seller).subscribe(data => {
      console.log(data)
      let latitude = data[0].lat;
      let longitude = data[0].lon;
      this.map = L.map('map').setView([latitude, longitude], 13);

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
