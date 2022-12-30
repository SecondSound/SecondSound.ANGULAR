import {Component, Input, OnInit} from '@angular/core';
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";

@Component({
  selector: 'app-ad-horizontal-card',
  templateUrl: './ad-horizontal-card.component.html',
  styleUrls: ['./ad-horizontal-card.component.css']
})
export class AdHorizontalCardComponent implements OnInit {

  @Input() advertisement: AdvertisementDto
  @Input() thisAdvertisementId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
