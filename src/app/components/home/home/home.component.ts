import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {Observable} from "rxjs";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public advertisements: AdvertisementDto[];


  constructor(private advertisementService: AdvertisementService) {
    this.getAllAdvertisements()
  }

  ngOnInit(): void {
  }

  update() {
    setTimeout(() => this.getAllAdvertisements(), 500)
  }

  public getAllAdvertisements() {
   return this.advertisementService.getAllAdvertisements().subscribe(data => { this.advertisements = data });
  }

  ngAfterViewInit() {
    this.update()
  }
}




