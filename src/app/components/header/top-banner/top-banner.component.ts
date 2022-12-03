import { Component, OnInit } from '@angular/core';
import {AuthManagementService} from "../../../services/auth-management.service";
import {LoginResponse} from "../../../shared/models/login-response.model";

@Component({
  selector: 'app-top-banner',
  templateUrl: './top-banner.component.html',
  styleUrls: ['./top-banner.component.css']
})
export class TopBannerComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: LoginResponse | undefined;

  constructor(private authManagementService: AuthManagementService) {
    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {;
      this.isLoggedIn = loggedIn;
    });

    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });
  }

  ngOnInit(): void {

  }

  logOutUser() {
    this.authManagementService.logOutUser();
  }
}
