import {AdvertisementDto} from "./AdvertisementDto";
import {UserDto} from "./UserDto";

export interface MessageDto {
  id: number;
  chatId: number;
  message: string;
  sender: UserDto;
  receiver: UserDto;
  createdAt: number;
}
