import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';
import { userProviders } from './user.providers';
import { UserService } from './user.service';

@Module({
  providers: [UserService, ...userProviders],
  exports: [UserService],
  controllers: [UsersController],
})
export class UserModule {}
