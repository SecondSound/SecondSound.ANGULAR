import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";

@Component({
  selector: 'app-selected-advertisements',
  templateUrl: './selected-advertisements.component.html',
  styleUrls: ['./selected-advertisements.component.css']
})
export class SelectedAdvertisementsComponent implements OnInit {

  constructor(private advertisementService: AdvertisementService) {
    this.getAllAdvertisements();
  }

  public advertisements: AdvertisementDto[];
  public selectedSubCategories: any;
  public NoAdsFound: Boolean = false;

  ngOnInit(): void {
  }

  update() {
    setTimeout(() => this.getAllAdvertisements(), 500)
  }

  public getAllAdvertisements() {
    console.log("getAll: " + this.NoAdsFound)
    this.advertisementService.subCategoriesSelected.subscribe(data => {
      this.selectedSubCategories = data?.value;
      this.advertisementService.getAllAdvertisements().subscribe(ads => {
        this.advertisements = ads;
        let selectedAdList: AdvertisementDto[] = []
        for (let i = 0; i < ads.length; i++) {
          for (let x = 0; x < this.selectedSubCategories?.length; x++) {
            if (ads[i].subCategory.id == this.selectedSubCategories[x]) {
              selectedAdList.push(ads[i])
            }
          }
        }

        if (this.selectedSubCategories == null || this.selectedSubCategories == 0){
          this.NoAdsFound = false;
        } else if (selectedAdList.length == 0){
          this.NoAdsFound = true;
          this.advertisements = selectedAdList;
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
}
