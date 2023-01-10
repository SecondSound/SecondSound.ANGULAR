import {User} from "./user.model";

export interface Rating {
  id?: number;
  ratedByUserId?: number;
  user: User;
  rating: number;
}
