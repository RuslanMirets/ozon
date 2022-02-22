import { ROLE_REPOSITORY } from 'src/core/constants';
import { Role } from './models/role.model';

export const roleProviders = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
