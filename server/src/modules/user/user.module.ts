import { Module } from '@nestjs/common';
import { usersProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  providers: [UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}
