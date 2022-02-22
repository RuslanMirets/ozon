import { Inject, Injectable } from '@nestjs/common';
import { ROLE_REPOSITORY } from 'src/core/constants';
import { RoleDto } from './dto/role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RoleService {
  constructor(@Inject(ROLE_REPOSITORY) private readonly roleRepository: typeof Role) {}

  async create(dto: RoleDto): Promise<Role> {
    return await this.roleRepository.create<Role>(dto);
  }

  async findOneByValue(value: string): Promise<Role> {
    return await this.roleRepository.findOne<Role>({ where: { value } });
  }
}
