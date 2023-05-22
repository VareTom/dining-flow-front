// Models
import { User } from './shared/models/user.model';

export interface StoreState {
  connectedUser: User | undefined;
  isNavigationBarDisplayed: boolean;
}
