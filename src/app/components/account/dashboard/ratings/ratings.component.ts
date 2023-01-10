import { Component, OnInit } from '@angular/core';
import {LoginResponse} from "../../../../shared/models/login-response.model";
import {AuthManagementService} from "../../../../services/auth-management.service";
import {RatingsService} from "../../../../services/ratings/ratings.service";
import {Rating} from "../../../../shared/models/rating.model";

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnInit {
  loading: boolean = true;
  noRatingsFound: boolean = false;
  user: LoginResponse;
  ratings: Rating[];

  constructor(private authManagementService: AuthManagementService, private ratingsService: RatingsService) { }

  ngOnInit(): void {
    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });

    this.ratingsService.getUserRatings().subscribe((ratings) => {
      this.ratings = ratings;
      if (ratings.length == 0) {
        this.noRatingsFound = true;
      }
      this.loading = false;
    });
  }

}
