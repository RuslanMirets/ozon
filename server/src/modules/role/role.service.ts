import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleModel: typeof Role) {}

  async create(dto: CreateRoleDto): Promise<Role> {
    return await this.roleModel.create<Role>(dto);
  }

  async findOneByValue(value: string): Promise<Role> {
    return await this.roleModel.findOne<Role>({ where: { value } });
  }
}
