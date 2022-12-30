import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";

@Component({
  selector: 'app-advertisement-element',
  templateUrl: './advertisement-element.component.html',
  styleUrls: ['./advertisement-element.component.css']
})
export class AdvertisementElementComponent implements OnInit {

  @Input() advertisement: AdvertisementDto;

  constructor() { }



  ngOnInit(): void {
  }

}
