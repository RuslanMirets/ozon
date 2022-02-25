import { LocalAuthGuard } from './../../core/guards/local-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  // @UseGuards(LocalAuthGuard)
  @Get()
  getAll() {
    return this.userService.findAll();
  }
}
