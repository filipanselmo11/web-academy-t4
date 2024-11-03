import { Request, Response } from "express";
import { LoginDto, SignupDto } from "./auth.types";
import { createUser, findUserByEmail } from "../user/user.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { UserTypes } from "../userType/userType.constants";
import { checkCredentials } from "./auth.service";


const signUp = async (req: Request, res: Response) => {
  const user: SignupDto = req.body;
  try{
    if (await findUserByEmail(user.email)) {
      res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
    } else {
      const newUser = await createUser({ ...user, userTypeId: UserTypes.client });
      res.status(StatusCodes.CREATED).json(newUser);
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
};


const login = async (req: Request, res: Response) => {
  const credentials: LoginDto = req.body;
  try {
    const user = await checkCredentials(credentials);
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    } else {
      req.session.uid = user.id;
      req.session.tipoUsuario = user.userTypeId;
      res.status(StatusCodes.OK);
    }
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(ReasonPhrases.INTERNAL_SERVER_ERROR);
  }
}

const logout = async (req: Request, res: Response) => {
  if (!req.session.uid) {
    res.status(StatusCodes.BAD_REQUEST).send(ReasonPhrases.BAD_REQUEST);
  } else {
    req.session.destroy((error) => {
      if (error) {
        console.log(error);
      }
      res.status(StatusCodes.NO_CONTENT).send(ReasonPhrases.NO_CONTENT);
    });
  }
};

export default {
  signUp,
  login,
  logout
}