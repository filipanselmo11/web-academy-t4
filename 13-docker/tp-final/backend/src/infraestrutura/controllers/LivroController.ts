import { NextFunction, Request, Response } from "express";

import { Dotenv } from "@/common/Dotenv";
import { Logger } from "@/common/Logger";
import { LivroParaAtualizarDTO } from "@/dominio/dto/LivroParaAtualizarDTO";
import { LivroParaCriarDTO } from "@/dominio/dto/LivroParaCriarDTO";
import { RegistroNaoSalvoError } from "@/dominio/excecoes/RegistroNaoSalvoError";
import { LivroDTOMapper } from "@/dominio/objectmapper/LivroDTOMapper";
import { LivroParaCriarMapper } from "@/dominio/objectmapper/LivroParaCriarMapper";
import { LivrosService } from "@/dominio/servicos/LivrosService"
import { gerarConexaoBDPrisma } from "@/infraestrutura/bd";
import { LivroEntityMapper } from "@/infraestrutura/bd/LivroEntityMapper";
import { PrismaLivrosRepository } from "../repositorios/prisma/PrismaLivrosRepository";

Dotenv.carregarVariaveis();

class LivrosController {

  private service: LivrosService;

  private logger: Logger;

  public constructor() {
    this.service = new LivrosService(
      new PrismaLivrosRepository(
        gerarConexaoBDPrisma(),
        new LivroEntityMapper()
      ),
      new LivroDTOMapper(),
      new LivroParaCriarMapper()
    );
    this.logger = Logger.pegarInstancia();
  }

  public async buscarTodos(req: Request, res: Response): Promise<void> {
    const livros = await this.service.buscarTodos();

    res.json(livros);
  }

  public async buscarLivroPorIsbn(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { isbn } = req.params;
      const livro = await this.service.buscarLivroPorIsbn(isbn);

      res.json(livro);
    } catch (erro: any) {
      this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
      next(erro);
    }
  }

  public async cadastrarNovoLivro(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const novoLivro: LivroParaCriarDTO = req.body as LivroParaCriarDTO;

      const resultado = await this.service.cadastrarNovoLivro(novoLivro);
      if (!resultado)
        throw new RegistroNaoSalvoError(`O livro com código ISBN ${novoLivro.isbn} não foi salvo no banco de dados.`);

      res.status(201).json(resultado);
    } catch (erro: any) {
      this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
      next(erro);
    }
  }

  public async atualizarLivro(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const dadosParaAtualizar = req.body as LivroParaAtualizarDTO;
      const { isbn } = req.params;

      const resultado = await this.service.atualizarLivro(isbn, dadosParaAtualizar);
      if (!resultado)
        throw new RegistroNaoSalvoError(`O livro com código ISBN ${isbn} não foi atualizado no banco de dados.`);

      res.json(resultado);
    } catch (erro: any) {
      this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
      next(erro);
    }
  }

  public async deletarLivro(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { isbn } = req.params;
      await this.service.deletarLivro(isbn);

      res.sendStatus(200);
    } catch (erro: any) {
      this.logger.error(`Exceção lançada na rota ${req.method} ${req.originalUrl}: ${erro.message}`);
      next(erro);
    }
  }
}

export { LivrosController };
