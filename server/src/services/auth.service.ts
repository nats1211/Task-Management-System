import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/user.models";

const JWT_SECRET = process.env.JWT_SECRET as jwt.Secret;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export class AuthService {
  static async login(email: string, password: string) {
    const user = await UserModel.findByEmail(email);

    if (!user) {
      throw new Error("Invalid Email or Password");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid Email or Password");
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    } as jwt.SignOptions);

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
