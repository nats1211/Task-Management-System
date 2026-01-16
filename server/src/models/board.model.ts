import { prisma } from "../config/db";
import { Prisma } from "../../generated/prisma";

export class BoardModel {
  /**Create Board */
  static async creatBoard(data: Prisma.BoardCreateInput) {
    return await prisma.board.create({
      data,
      select: {
        title: true,
        description: true,
        visibility: true,
        ownerId: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
  /**Read Board */
  static async findBoardById(boardId: string, userId: string) {
    return await prisma.board.findFirst({
      where: { id: boardId, ownerId: userId },
      select: {
        title: true,
        description: true,
        visibility: true,
        ownerId: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
  /**Update Board */
  static async updateBoard(id: string, data: Prisma.BoardUpdateInput) {
    return await prisma.board.update({
      where: { id },
      data,
      select: {
        title: true,
        description: true,
        visibility: true,
        ownerId: true,
        created_at: true,
        updated_at: true,
      },
    });
  }
  /**Delete Board */
  static async deleteBoard(id: string) {
    return await prisma.board.update({
      where: { id },
      data: {
        deleted_at: new Date(),
      },
    });
  }
}
