import {SubCategory} from "./SubCategory";

export interface AdvertisementDto {
  id: number;
  title: string;
  description: string
  price: string
  imgFile: string;
  user: number;
  subCategory: SubCategory;
  isSaved: boolean;
}
