import {  User } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { findUserByEmail } from "../user/user.service";
import { compare } from "bcryptjs";


// const prisma = new PrismaClient();

export const checkCredentials = async (credentials: LoginDto): Promise<User | null> => {
  const user = await findUserByEmail(credentials.email);
  if (!user) return null;
  const ok = await compare(credentials.password, user.password);
  if (ok) return user;
  return null;
};