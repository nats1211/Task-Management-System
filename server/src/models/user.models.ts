import { prisma } from "../config/db";
import { Prisma } from "../../generated/prisma";

export class UserModel {
  // find user by email
  static async findByEmail(email: string) {
    return await prisma.user.findUnique({
      where: { email },
    });
  }

  // find user by ID
  static async findByID(id: string) {
    return await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  // Create new user
  static async create(data: Prisma.UserCreateInput) {
    return await prisma.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
      },
    });
  }

  static async update(id: string, data: Prisma.UserUpdateInput) {
    return await prisma.user.update({
      where: { id },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        avatarUrl: true,
        createdAt: true,
      },
    });
  }

  static async delete(id: string) {
    return await prisma.user.findUnique({ where: { id } });
  }
}
