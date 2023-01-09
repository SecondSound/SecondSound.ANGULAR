import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {BidDto} from "../../../shared/models/BidDto";

@Component({
  selector: 'app-advertisement-details',
  templateUrl: './advertisement-details.component.html',
  styleUrls: ['./advertisement-details.component.css']
})
export class AdvertisementDetailsComponent implements OnInit {
  advertisementFromURL: { id: number };
  advertisement: AdvertisementDto = null;
  bids: BidDto[] = [];
  error = null;

  constructor(private route: ActivatedRoute,
              private advertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
    this.advertisementFromURL = {
      id: this.route.snapshot.params['id']
    };

    this.advertisementService.getAdvertisement(this.advertisementFromURL.id).subscribe(data => {
      this.advertisement = data;
      this.advertisementService.getBids(this.advertisement.id)
        .subscribe(data => {
          this.bids = data;
        })
    })
  }
}
