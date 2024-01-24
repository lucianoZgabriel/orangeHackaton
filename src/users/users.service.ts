import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();  

  async createUser(data: {firstName: string, lastName: string, email: string, password: string}) {
    return await this.prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      }
    })
  }

  async updateUser(userId: number, data: {firstName?: string, lastName?: string, email?: string, password?: string}) {
    return await this.prisma.user.update({
      where: {
        id: userId
      },
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password
      }
    })
  }

  async getUser(userId: number) {
    return await this.prisma.user.findUnique({
      where: {
        id: userId
      }
    })
  }
}