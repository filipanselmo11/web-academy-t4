import { PrismaClient } from "@prisma/client";

import { ObjectMapper } from "@/common/ObjectMapper";
import { Livro } from "@/dominio/modelos/Livro";
import { LivrosRepository } from "@/dominio/repositorios/LivrosRepository";
import { RegistroNaoEncontradoError } from "@/dominio/excecoes/RegistroNaoEncontradoError";
import { LivroEntity } from "@/infraestrutura/bd/Entidade";

class PrismaLivrosRepository implements LivrosRepository {

  private conexao: PrismaClient;

  private mapper: ObjectMapper<LivroEntity, Livro>;

  public constructor(conexao: PrismaClient, mapper: ObjectMapper<LivroEntity, Livro>) {
    this.conexao = conexao;
    this.mapper = mapper;
  }

  public async buscarPorIsbn(isbn: string): Promise<Livro> {
    const livro = await this.conexao.livro.findUnique({
      where: { isbn }
    });

    if (!livro)
      throw new RegistroNaoEncontradoError(`O livro com código ISBN ${isbn} não foi encontrado.`);

    return await this.mapper.mapear(livro);
  }

  public async buscarTodos(): Promise<Livro[]> {
    const livros = await this.conexao.livro.findMany();

    return await this.mapper.mapearLista(livros);
  }

  public async buscarPorId(id: string): Promise<Livro> {
    const livro = await this.conexao.livro.findUnique({
      where: { id }
    });

    if (!livro)
      throw new RegistroNaoEncontradoError(`O livro de ID ${id} não foi encontrado.`);

    return await this.mapper.mapear(livro);
  }

  public async existe(id: string): Promise<boolean> {
    const livro = await this.conexao.livro.findUnique({
      where: { id }
    });

    return !!livro;
  }

  public async remover(id: string): Promise<boolean> {
    const livro = await this.conexao.livro.delete({
      where: { id }
    });

    return !!livro;
  }

  public async salvar(livro: Livro): Promise<void> {
    await this.conexao.livro.upsert({
      create: {
        id: livro.id,
        nome: livro.nome,
        sinopse: livro.sinopse,
        isbn: livro.isbn,
        urlImagem: livro.urlImagem,
        autores: livro.autores
      },
      update: {
        nome: livro.nome,
        sinopse: livro.sinopse,
        urlImagem: livro.urlImagem,
        autores: livro.autores
      },
      where: {
        id: livro.id
      }
    });
  }
}

export { PrismaLivrosRepository };
