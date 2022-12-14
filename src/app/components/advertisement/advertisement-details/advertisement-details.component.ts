import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  advertisementFromURL: {id: number};
  advertisement: any

  constructor(private route: ActivatedRoute,
              private advertisementService: AdvertisementService,) {

  }

  ngOnInit(): void {
    this.advertisementFromURL = {
      id: this.route.snapshot.params['id']
    };

    this.advertisementService.getAdvertisement(this.advertisementFromURL.id)
      .subscribe(data => { this.advertisement = data; console.log(data)})
  }

}
