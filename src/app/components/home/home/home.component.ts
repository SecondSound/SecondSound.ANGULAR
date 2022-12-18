import {Component, OnInit} from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private advertisementService : AdvertisementService) { }

  ngOnInit(): void {
  }

}




