import {SellerBidderDto} from "./SellerBidderDto";

export interface BidDto {
  id: Number;
  amount: string;
  createdAt: Date;
  bidder: SellerBidderDto;
}
