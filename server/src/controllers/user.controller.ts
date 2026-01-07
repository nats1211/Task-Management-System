import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { name, email, password, avatarUrl } = req.body;

      const user = await UserService.registerUser(
        name,
        email,
        password,
        avatarUrl
      );

      return res.status(201).json({
        message: "User created successfully",
        data: user,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}
