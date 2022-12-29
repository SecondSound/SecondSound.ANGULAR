import { Component, OnInit } from '@angular/core';
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AuthManagementService} from "../../../services/auth-management.service";
import {LoginResponse} from "../../../shared/models/login-response.model";

@Component({
  selector: 'app-saved-advertisements',
  templateUrl: './saved-advertisements.component.html',
  styleUrls: ['./saved-advertisements.component.css']
})
export class SavedAdvertisementsComponent implements OnInit {

  public advertisements: AdvertisementDto[];
  user: LoginResponse | undefined;
  isLoggedIn: boolean = false;

  constructor(private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService) {
    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;

      this.authManagementService.user$.subscribe((user: LoginResponse) => {
        this.user = user;
      });
    });


  }

  ngOnInit(): void {
    this.getSavedAdvertisements()
  }

  public getSavedAdvertisements(){
    this.advertisementService.getSavedAdvertisements().subscribe(ads => {this.advertisements = ads})
  }

  switchLikeButton(advertisementId: number) {

    this.advertisementService.saveAdvertisement(advertisementId).subscribe(() => {
      location.reload();
    });
  }

}
