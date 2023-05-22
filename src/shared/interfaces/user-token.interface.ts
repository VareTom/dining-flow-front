import { User } from '../models/user.model';

export interface UserTokenInterface {
  token: string;
  user: User;
}
