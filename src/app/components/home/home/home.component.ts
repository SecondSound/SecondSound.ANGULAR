import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  public advertisements: any;

  constructor(private advertisementService: AdvertisementService) {
  }

  ngOnInit(): void {
    this.getAllAdvertisements()
  }

  update() {
    setTimeout(() => this.getAllAdvertisements(), 750)
  }

  public getAllAdvertisements() {
   this.advertisementService.getAllAdvertisements().subscribe(data => {this.advertisements = data; console.log(this.advertisements)} )
  }

  ngAfterViewInit() {
    this.update()
  }
}




