import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userModel.create<User>(dto);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userModel.findOne<User>({ where: { email } });
  }

  async findOneById(id: string): Promise<User> {
    return await this.userModel.findOne<User>({ where: { id } });
  }

  async findAll() {
    return await this.userModel.findAll();
  }
}
