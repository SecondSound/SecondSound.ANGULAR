import {Component, Input, OnInit} from '@angular/core';
import {LoginResponse} from "../../../../shared/models/login-response.model";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {AdvertisementDto} from "../../../../shared/models/AdvertisementDto";

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  isLoggedIn: boolean = false;
  user: LoginResponse | undefined;
  @Input() advertisement: AdvertisementDto;

  constructor(private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService) {

    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });
  }

  ngOnInit(): void {
  }


  switchLikeButton(advertisementId: number) {

    this.advertisementService.saveAdvertisement(advertisementId).subscribe(() => {
      location.reload();
    });
  }

}
