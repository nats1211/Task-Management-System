import { UserModel } from "../models/user.models";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export class UserService {
  static async registerUser(name: string, email: string, password: string) {
    const EXISTING_USER = await UserModel.findByEmail(email);

    if (EXISTING_USER) {
      throw new Error("Email Already Exist");
    }

    const hashpassword = await bcrypt.hash(password, SALT_ROUNDS);

    return UserModel.create({ name, email, password: hashpassword });
  }
}
