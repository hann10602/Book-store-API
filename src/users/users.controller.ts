import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UsePipes,
} from '@nestjs/common';
import { Users } from 'src/schemas/Users.schema';
import {
  SearchUsersSDI,
  SelfUserSDO,
  UpdateUserPasswordSDI,
  UpdateUserSDI,
} from './dtos/User.dto';
import { CreateUsersPipe } from './users.pipe';
import { UsersService } from './users.service';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('search')
  @UsePipes(CreateUsersPipe)
  getAll(@Body() userSdi?: SearchUsersSDI): Promise<Users[]> {
    return this.usersService.search(userSdi);
  }

  @Get(':id')
  getOne(@Param('id') id: string): Promise<SelfUserSDO> {
    return this.usersService.getOne(id);
  }

  @Put(':id/change-password')
  changePassword(
    @Param('id') id: string,
    @Body() userDto: UpdateUserPasswordSDI,
  ) {
    return this.usersService.changePassword(id, userDto);
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() userDto: UpdateUserSDI) {
    return this.usersService.updateUser(id, userDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.usersService.deleteUser(id);
  }
}
