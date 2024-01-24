import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdatePatchUserDto } from "./dto/update-patch-user.dto";

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();  

  async createUser({firstName, lastName, email, password}: CreateUserDto) {
    return await this.prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password
      }
    })
  }

  async updateUser(userId: number, data: UpdatePatchUserDto) {
    return await this.prisma.user.update({
      where: {
        id: userId
      },
      data,
    })
  }

  async getUser(userId: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })
  }

  async listUsers() {
    return await this.prisma.user.findMany();
  }

  async deleteUser(userId: number) {
    return await this.prisma.user.delete({
      where: {
        id: userId
      }
    })
  }
}