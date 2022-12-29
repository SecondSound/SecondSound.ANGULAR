import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {SellerBidderDto} from "../../../../shared/models/SellerBidderDto";

@Component({
  selector: 'app-seller-element',
  templateUrl: './seller-element.component.html',
  styleUrls: ['./seller-element.component.css']
})
export class SellerElementComponent implements OnInit {

  @Input() advertisement: AdvertisementDto;
  @Input() seller: SellerBidderDto;

  constructor() {}

  ngOnInit(): void {

  }

}
