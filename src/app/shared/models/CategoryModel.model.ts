import {SubCategoryModel} from "./SubCategoryModel.model";

export interface CategoryModel {
  id: number;
  name: string;
  children: SubCategoryModel[]
}


