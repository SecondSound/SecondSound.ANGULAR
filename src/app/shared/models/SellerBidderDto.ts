import {AdvertisementDto} from "./AdvertisementDto";

export interface SellerBidderDto {
  id: Number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phoneNumber: string;
  email: string;
  advertisements: AdvertisementDto[];
}
