"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const db_1 = require("../config/db");
class UserModel {
    //find user by email
    static async findByEmail(email) {
        return await db_1.prisma.user.findUnique({
            where: { email },
        });
    }
}
exports.UserModel = UserModel;
