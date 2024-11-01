import { PrismaClient, User } from "@prisma/client";
import { CreateUserDto, UpdateUserDto, UserDto } from "./user.types";
import { genSalt, hash } from "bcryptjs";


const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<UserDto[]> => {
    const users = await prisma.user.findMany();

    return users.map((user) => {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    });
};

export const createUser = async (user: CreateUserDto): Promise<User> => {
    const salt = await genSalt();
    const password = await hash(user.password, salt);
    return await prisma.user.create({
        data: { ...user, password }
    });
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
    return await prisma.user.findUnique({
        where: { email: email }
    });
};

export const checkUserById = async (id: string): Promise<boolean> => {
    return !!(await prisma.user.findUnique({
        where: { id: id }
    }));
};

export const readUser = async (id: string): Promise<User | null> => {
    return prisma.user.findFirst({
        where: { id: id }
    });
};

export const updateUser = async (id: string, user: UpdateUserDto): Promise<User> => {
    return prisma.user.update({
        where: { id: id },
        data: { ...user }
    });
};

export const deleteUser = async (id: string): Promise<void> => {
    await prisma.user.delete({
        where: { id: id }
    })
};