import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare, hash } from 'bcrypt';
import { Model } from 'mongoose';
import { salt } from 'src/auth/constants/Auth.const';
import { RolesService } from 'src/roles/roles.service';
import { Users } from 'src/schemas/Users.schema';
import {
  CreateUserSDI,
  SearchUsersSDI,
  SelfUserSDO,
  UpdateUserPasswordSDI,
  UpdateUserSDI,
} from './dtos/User.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<Users>,
    private readonly roleService: RolesService,
  ) {}

  getAll(userDto?: SearchUsersSDI) {
    return this.userModel.find(userDto).populate(['roles']);
  }

  async getOne(id: string): Promise<SelfUserSDO> {
    return await this.userModel.findById(id).populate(['roles']);
  }

  async getOneByUsername(username: string) {
    return await this.userModel.findOne({ username }).populate(['roles']);
  }

  async createUser(userDto: CreateUserSDI) {
    const currentUser = await this.userModel.findOne({
      username: userDto.username,
    });

    if (currentUser) throw new UnauthorizedException('User already exist');

    const hashPassword = await hash(userDto.password, salt);

    const roles = await this.roleService.getRoleByCode('USER');

    const newUser = new this.userModel({
      roles,
      status: true,
      username: userDto.username,
      password: hashPassword,
    });

    await newUser.save();

    return 'Success';
  }

  async updateUser(id: string, userDto: UpdateUserSDI) {
    const roles = await this.roleService.getRoleByCode(userDto.role);

    await this.userModel.findByIdAndUpdate(id, { roles: roles, ...userDto });

    return 'Success';
  }

  async changePassword(id: string, userDto: UpdateUserPasswordSDI) {
    const user = await this.userModel.findById(id);

    const isPasswordMatched = await compare(userDto.oldPassword, user.password);

    if (!isPasswordMatched) throw new UnauthorizedException('Wrong password');

    user.password = await hash(userDto.newPassword, salt);

    user.save();

    return 'Success';
  }

  async deleteUser(id: string) {
    await this.userModel.findByIdAndDelete(id);

    return 'Success';
  }
}
