import {AdvertisementDto} from "./AdvertisementDto";

export interface SellerBidderDto {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  phoneNumber: string;
  email: string;
  rating?: number;
  advertisements: AdvertisementDto[];
}
