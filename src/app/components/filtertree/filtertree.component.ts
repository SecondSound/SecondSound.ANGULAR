import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {AdvertisementService} from "../../services/advertisement/advertisement.service";
import {CategoryModel} from "../../shared/models/CategoryModel.model";

@Component({
  selector: 'app-filtertree',
  templateUrl: './filtertree.component.html',
  styleUrls: ['./filtertree.component.css']
})
export class FiltertreeComponent implements OnInit {

  public advertisements: any;
  treeControl = new NestedTreeControl<CategoryModel>(node => node.children);
  dataSource = new MatTreeNestedDataSource<CategoryModel>();


  constructor(private advertisementService: AdvertisementService) {
    this.getAllCategoryDto()
  }
  hasChild = (_: number, node: CategoryModel) => !!node.children && node.children.length > 0;
  ngOnInit(): void {
    this.getAllAdvertisements()
  }

  update() {
    setTimeout(() => this.getAllAdvertisements(), 500)
  }

  public getAllAdvertisements() {
    this.advertisementService.getAllAdvertisements()
      .subscribe(data => {this.advertisements = data; } )
  }

  public getAllCategoryDto() {
    return this.advertisementService.getCategoryDto()
      .subscribe(data => { this.dataSource.data = data } );
  }

  ngAfterViewInit() {
    this.update()
  }

}
