import {SubCategoryModel} from "./SubCategoryModel.model";

export interface AdvertisementDto {
  id: number;
  title: string;
  description: string
  price: string
  imgFile: string;
  user: number;
  subCategory: SubCategoryModel;
}
