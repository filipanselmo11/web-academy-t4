import { NextFunction, Request, Response } from "express";
import { UserTypes } from "../resources/userType/userType.constants";
import { ReasonPhrases, StatusCodes } from "http-status-codes";


const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.uid || req.session.tipoUsuario !== UserTypes.admin) {
    res.status(StatusCodes.FORBIDDEN).send(ReasonPhrases.FORBIDDEN);
  } else {
    next();
  }
};

export default isAdmin;