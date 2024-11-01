import { Request, response, Response } from "express";
import { checkUserById, createUser, deleteUser, findUserByEmail, getAllUsers, readUser, updateUser } from "./user.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateUserDto, UpdateUserDto, UserDto } from "./user.types";
import { User } from "@prisma/client";

const index = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(StatusCodes.OK).send(users);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

const create = async (req: Request, res: Response) => {
    const user: CreateUserDto = req.body;
    try {
        if (!await findUserByEmail(user.email)) {
            const newUser = await createUser(user);
            res.status(StatusCodes.CREATED).json(newUser);
        } else {
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

const read = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if ((await checkUserById(id))) {
            const user = await readUser(id);
            res.status(StatusCodes.OK).json(user);
        } else {
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if ((await checkUserById(id))) {
            const user: User = req.body;
            const userUpdated: UpdateUserDto = await updateUser(id, user);
            res.status(StatusCodes.OK).json(userUpdated);
        } else {
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deleteUser(id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

export default {
    index,
    create,
    read,
    update,
    remove
}