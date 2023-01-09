import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";
import {LoginResponse} from "../../../../shared/models/login-response.model";
import {AuthManagementService} from "../../../../services/auth-management.service";

@Component({
  selector: 'app-user-advertisements',
  templateUrl: './user-advertisements.component.html',
  styleUrls: ['./user-advertisements.component.css']
})
export class UserAdvertisementsComponent implements OnInit {
  loading: boolean = true;
  noAdsFound: boolean = false;
  user: LoginResponse;
  advertisements: AdvertisementDto[];

  constructor(private advertisementService: AdvertisementService, private authManagementService: AuthManagementService) { }

  ngOnInit(): void {
    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });
    this.advertisementService.getUserAdvertisements().subscribe((advertisements) => {
      this.advertisements = advertisements;
      if (advertisements.length == 0) {
        this.noAdsFound = true;
      }

      this.loading = false;
    });
  }

}
