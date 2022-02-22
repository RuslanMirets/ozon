import { USER_REPOSITORY } from './../../core/constants/index';
import { User } from './models/user.model';

export const usersProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
