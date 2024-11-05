import { NextFunction, Request, Response } from "express";
import { ReasonPhrases, StatusCodes } from "http-status-codes";

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.uid) {
    res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
  } else {
    next();
  }
};

export default isAuth;