import {
  NextFunction,
  Request,
  Response
} from "express";

const capturarErro404 = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  res.status(404);
  res.send(`A rota ${req.url} não existe no servidor.`);
};

export { capturarErro404 };
