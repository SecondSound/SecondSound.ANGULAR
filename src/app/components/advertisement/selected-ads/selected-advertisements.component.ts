import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {AuthManagementService} from "../../../services/auth-management.service";
import {LoginResponse} from "../../../shared/models/login-response.model";
import {Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";


@Component({
  selector: 'app-selected-advertisements',
  templateUrl: './selected-advertisements.component.html',
  styleUrls: ['./selected-advertisements.component.css']
})
export class SelectedAdvertisementsComponent implements OnInit {
  searchQuery: string;
  loading: boolean = true;

  constructor(private advertisementService: AdvertisementService,
              private authManagementService: AuthManagementService,
              private searchService: SearchService) {
    this.authManagementService.isUserLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.searchService.resetFilter$.subscribe((reset: boolean) => {
      if (reset) {
        this.advertisementService.subCategoriesSelected.next(null);
        location.reload();
      }
    });

    this.searchService.searchQuery$.subscribe((query: string) => {
      this.searchQuery = query
      this.searchAdvertisements();
    });
  }

  public advertisements: AdvertisementDto[];
  public NoAdsFound: Boolean = false;
  isLoggedIn: boolean = false;

  ngOnInit(): void {
    this.getAllAdvertisements();
  }

  public getAllAdvertisements() {
      // Get the value of the selected checkboxes
    this.advertisementService.subCategoriesSelected.subscribe(selectedSubCategories => {

        // Get advertisements from database
      this.advertisementService.getAllAdvertisements(this.isLoggedIn, this.searchQuery).subscribe(ads => {
          // Save advertisements in variable
        this.advertisements = ads;
        let selectedAdList: AdvertisementDto[] = []

        if (selectedSubCategories.value != null) {
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
        this.loading = false;
      });
    });
  }

  searchAdvertisements() {
    this.loading = true;
    this.NoAdsFound = false;
    this.advertisementService.getAllAdvertisements(this.isLoggedIn, this.searchQuery).subscribe(ads => {
      this.advertisements = ads;
      if (this.advertisements.length == 0) {
        this.NoAdsFound = true;
      }
      this.loading = false;
    });
  }
}
