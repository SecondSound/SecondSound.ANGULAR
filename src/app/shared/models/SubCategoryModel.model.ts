import {CategoryModel} from "./CategoryModel.model";

export interface SubCategoryModel {
  id: number;
  name: string;
  children: null;
  category: CategoryModel;
}


