import { USER_REPOSITORY } from './../../core/constants/index';
import { User } from './models/user.model';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
