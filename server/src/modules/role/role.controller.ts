import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  create(@Body() dto: RoleDto) {
    return this.roleService.create(dto);
  }

  @Get('/:value')
  findOneByValue(@Param('value') value: string) {
    return this.roleService.findOneByValue(value);
  }
}
