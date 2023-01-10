import {User} from "./user.model";

export interface Rating {
  ratedByUserId: number;
  user: User;
  rating: number;
}
