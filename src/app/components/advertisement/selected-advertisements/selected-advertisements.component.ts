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
    this.advertisementService.subCategoriesSelected.subscribe(data => {
      this.selectedSubCategories = data?.value;
      if (data.value == null) {
        this.advertisementService.getAllAdvertisements().subscribe(data => { this.advertisements = data });
      } else {
        this.advertisementService.getAllAdvertisements().subscribe(data => {
            let selectedAdList: AdvertisementDto[] = []
            for (var i = 0; i < data.length; i++) {
              for (let x = 0; x < this.selectedSubCategories?.length; x++) {
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
