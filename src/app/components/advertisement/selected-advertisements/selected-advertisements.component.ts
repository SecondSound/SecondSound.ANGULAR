import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {AuthManagementService} from "../../../services/auth-management.service";
import {LoginResponse} from "../../../shared/models/login-response.model";

@Component({
  selector: 'app-selected-advertisements',
  templateUrl: './selected-advertisements.component.html',
  styleUrls: ['./selected-advertisements.component.css']
})
export class SelectedAdvertisementsComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService) {
    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {;
      this.isLoggedIn = loggedIn;
    });

    this.authManagementService.user$.subscribe((user: LoginResponse) => {
      this.user = user;
    });

    this.getAllAdvertisements();
  }

  public advertisements: AdvertisementDto[];
  public NoAdsFound: Boolean = false;
  public likeStatus: String = "../../../../assets/images/heart-transparant.png";
  isLoggedIn: boolean = false;
  user: LoginResponse | undefined;

  ngOnInit(): void {
  }

  update() {

      // added timeout because photos of new ads were not showing due delay
    setTimeout(() => this.getAllAdvertisements(), 500)
  }

  public getAllAdvertisements() {
      // Get the value of the selected checkboxes
    this.advertisementService.subCategoriesSelected.subscribe(selectedSubCategories => {

        // Get advertisements from database
      this.advertisementService.getAllAdvertisements().subscribe(ads => {

          // Save advertisements in variable
        this.advertisements = ads;
        let selectedAdList: AdvertisementDto[] = []

        if (selectedSubCategories.length != null) {
          // Add advertisements from selected subcategories in new list
          for (let i = 0; i < ads.length; i++) {
            for (let x = 0; x < selectedSubCategories.value.length; x++) {
              if (ads[i].subCategory.id == selectedSubCategories.value[x]) {
                selectedAdList.push(ads[i])
              }
            }
          }
        }

          // if there are no selections, show the whole list and don't show message
        if (selectedSubCategories.value == null || selectedSubCategories.value.length == 0){
          this.NoAdsFound = false;

          // if there are selections, but no matching advertisements, show message and empty list
        } else if (selectedAdList.length == 0){
          this.NoAdsFound = true;
          this.advertisements = selectedAdList;

          // if there are selections and matching advertisements, hide message and show advertisements
        } else {
          this.NoAdsFound = false;
          this.advertisements = selectedAdList;
        }
      });
    })
  }

  ngAfterViewInit() {
    this.update()
  }

  switchLikeButton(advertisementId: number) {

    this.advertisementService.saveAdvertisement(advertisementId).subscribe(data => {
      let advertisement = this.advertisements.filter(x => x.id = advertisementId);
      advertisement[0].isSaved = data;
    });

    const like: String = "../../../../assets/images/heart-red.png";
    const disLike: String = "../../../../assets/images/heart-transparant.png";


      if (this.likeStatus == like) {
        this.likeStatus = disLike;
      } else {
        this.likeStatus = like;
      }
  }
}
