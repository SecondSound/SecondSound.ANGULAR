import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";

@Component({
  selector: 'app-advertisement-element',
  templateUrl: './advertisement-element.component.html',
  styleUrls: ['./advertisement-element.component.css']
})
export class AdvertisementElementComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private advertisementService: AdvertisementService) { }

  advertisementFromURL: {id: number};
  advertisement: AdvertisementDto;
  error = null;

  ngOnInit(): void {

    this.advertisementFromURL = {
      id: this.route.snapshot.params['id']
    };

    this.advertisementService.getAdvertisement(this.advertisementFromURL.id)
      .subscribe(data => {
        this.advertisement = data;}, error => {this.error = error; })

  }

}
