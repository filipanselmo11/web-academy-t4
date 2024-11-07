import "reflect-metadata";

import { app } from "@/app";
import { Logger } from "@/common/Logger";

import { createServer, Server } from "node:http";

const iniciarAplicacao = async (): Promise<void> => {
  const logger: Logger = Logger.pegarInstancia();
  const porta: number = (process.env.PORTA || 3000) as number;
  const servidor: Server = createServer(app);

  try {
    servidor.listen(porta, () => logger.info(`SERVIDOR RODANDO VIOLENTAMENTE NA PORTA ${porta}.`));
  } catch (erro: any) {
    logger.error(erro);
    process.exit(130);
  }
};

void iniciarAplicacao();
