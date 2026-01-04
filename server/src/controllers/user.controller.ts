import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  static async registerUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;

      const USER = await UserService.registerUser(name, email, password);

      return res.status(201).json({
        message: "User created successfully",
        data: USER,
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}
