import {AdvertisementDto} from "./AdvertisementDto";
import {UserDto} from "./UserDto";

export interface ChatDto {
  id: number;
  advertisement: AdvertisementDto;
  sender: UserDto;
  receiver: UserDto;
}
