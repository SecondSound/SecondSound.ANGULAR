import {SubCategory} from "./SubCategory";
import {SellerBidderDto} from "./SellerBidderDto";

export interface AdvertisementDto {
  id: number;
  title: string;
  description: string
  price: string
  imgFile: string;
  seller: SellerBidderDto;
  subCategory: SubCategory;
  saved: boolean;
}
