import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
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
    @Body()
    CreateUserDto: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ) {
    return this.usersService.createUser(CreateUserDto);
  }

  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUser(id);
  }

  // @Put(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() { name, email, password }: UpdatePutUserDto,
  // ) {
  //   return { method: 'PUT', id, name, email, password };
  // }

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
