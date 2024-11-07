import { Logger } from "@/common/Logger";

import {
  NextFunction,
  Request,
  Response
} from "express";

const imprimirLogRequisicoes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const logger = Logger.pegarInstancia();
  const inicio = Date.now();

  res.on("finish", () => {
    const { method, originalUrl } = req;
    const { statusCode } = res;
    const fim = Date.now();
    const mensagem = `${method} ${originalUrl} ${statusCode} ${(fim - inicio)}ms.`;

    if ((statusCode >= 100) && (statusCode <= 299))
      logger.info(mensagem);
    else if ((statusCode >= 300) && (statusCode <= 399))
      logger.info(mensagem);
    else if ((statusCode >= 400) && (statusCode <= 599))
      logger.error(mensagem);
  });

  next();
};

export { imprimirLogRequisicoes };