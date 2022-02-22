import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { roleProviders } from './role.providers';

@Module({
  providers: [RoleService, ...roleProviders],
  controllers: [RoleController],
  exports: [RoleService],
})
export class RoleModule {}
