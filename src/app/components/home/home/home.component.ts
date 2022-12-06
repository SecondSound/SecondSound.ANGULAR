import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public advertisements: any;

  constructor(private advertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
    this.advertisements = this.advertisementService.getAllAdvertisements().subscribe(data => {this.advertisements = data; } )
  }

}




