import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async addUser(
    @Body() { firstName, lastName, email, password }: CreateUserDto,
  ) {
    return this.usersService.createUser({firstName, lastName, email, password});
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    userData: {
      firstName?: string;
      lastName?: string;
      email?: string;
      password?: string;
    },
  ) {
    return this.usersService.updateUser(id, userData);
  }

  // @Delete(':id')
  // async delete(@Param('id', ParseIntPipe) id: number) {
  //   return { id: id };
  // }
}
