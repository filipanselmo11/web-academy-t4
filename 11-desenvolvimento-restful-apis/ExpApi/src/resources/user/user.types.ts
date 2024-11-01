import { User } from "@prisma/client";

export type CreateUserDto = Pick<User, "name" | "email" | "password" | "userTypeId">;

export type UserDto = Omit<User, "password">;

export type UpdateUserDto = Pick<User, "email" | "password" | "userTypeId">;