import {Component, OnInit, Output} from '@angular/core';
import {NestedTreeControl} from "@angular/cdk/tree";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {AdvertisementService} from "../../../../services/advertisement/advertisement.service";
import {Category} from "../../../../shared/models/Category";
import {FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {HomeComponent} from "../../../home/home/home.component";

@Component({
  selector: 'app-filtertree',
  templateUrl: './filtertree.component.html',
  styleUrls: ['./filtertree.component.css']
})
export class FiltertreeComponent implements OnInit {

  treeControl = new NestedTreeControl<Category>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Category>();
  subCategoriesSelected: FormGroup;
  selectedSubCategories: FormArray;


  constructor(private advertisementService: AdvertisementService,
              private formBuilder: FormBuilder) {
    this.advertisementService.subCategoriesSelected.emit(null);
    this.getAllCategoryDto()
    this.subCategoriesSelected = formBuilder.group({
      selectedSubCategories:  this.formBuilder.array([])
    });
  }
  hasChild = (_: number, node: Category) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.advertisementService.subCategoriesSelected.emit(this.subCategoriesSelected.value);
  }

  public getAllCategoryDto() {
    return this.advertisementService.getCategoryDto()
      .subscribe(data => { this.dataSource.data = data } );
  }

  // submit() {
  //   this.advertisementService.subCategoriesSelected.emit(this.subCategoriesSelected.value);
  // }

  onCheckboxChange(e) {
    this.selectedSubCategories = this.subCategoriesSelected.get('selectedSubCategories') as FormArray;

    if (e.target.checked) {
      this.selectedSubCategories.push(new FormControl(Number(e.target.value)));
    } else {
      const index = this.selectedSubCategories.controls.findIndex(x => x.value === e.target.value);
      this.selectedSubCategories.removeAt(index);
    }

    this.advertisementService.subCategoriesSelected.emit(this.selectedSubCategories);
  }
}
