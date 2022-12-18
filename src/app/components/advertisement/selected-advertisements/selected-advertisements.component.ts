import { Component, OnInit } from '@angular/core';
import {AdvertisementService} from "../../../services/advertisement/advertisement.service";
import {AdvertisementDto} from "../../../shared/models/AdvertisementDto";
import {FormArray} from "@angular/forms";
import {checkPort} from "@angular-devkit/build-angular/src/utils/check-port";
import {empty} from "rxjs";

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
  public NoAdsFound: Boolean = false

  ngOnInit(): void {

  }

  update() {
    setTimeout(() => this.getAllAdvertisements(), 500)
  }

  public getAllAdvertisements() {
    this.advertisementService.subCategoriesSelected.subscribe(data => {
      if (data.value == undefined) {
        this.advertisementService.getAllAdvertisements().subscribe(data => { this.advertisements = data });
      } else {
        this.selectedSubCategories = data.value;
        this.advertisementService.getAllAdvertisements().subscribe(data => {
            let selectedAdList: AdvertisementDto[] = []
            for (var i = 0; i < data.length; i++) {
              for (let x = 0; x < this.selectedSubCategories.length; x++) {
                // console.log(data[i].id + "/" + selectedSubs[x])
                if (data[i].subCategory.id == this.selectedSubCategories[x]) {
                  selectedAdList.push(data[i])
                }
              }
            }
            this.advertisements = selectedAdList;
            this.NoAdsFound = false;
            if (this.advertisements.length == 0) {
              this.NoAdsFound = true;
              this.advertisementService.getAllAdvertisements().subscribe(data => { this.advertisements = data });
            }
          }
        );
      }
    })
  }


  ngAfterViewInit() {
    this.update()
  }
}
