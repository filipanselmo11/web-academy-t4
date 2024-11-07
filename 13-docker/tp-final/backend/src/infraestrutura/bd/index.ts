import { PrismaClient, Prisma } from "@prisma/client";

import { Logger } from "@/common/Logger";

const gerarConexaoBDPrisma = (): PrismaClient => {
  const logger = Logger.pegarInstancia();
  const conexao = new PrismaClient({
    log: [
      {
        emit: "event",
        level: "query"
      },
      {
        emit: "event",
        level: "error"
      }
    ]
  });

  conexao.$on("query", (e: Prisma.QueryEvent): void => {
    logger.info(`Query: ${e.query}`);
    logger.info(`Params: ${e.params}`);
    logger.info(`Duracao: ${e.duration}ms`);
  });
  conexao.$on("error", (e: Prisma.LogEvent): void => {
    logger.error(e.message);
    logger.error(e.target);
  });

  return conexao;
};

export { gerarConexaoBDPrisma };
