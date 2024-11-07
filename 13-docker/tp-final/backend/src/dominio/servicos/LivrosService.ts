import { randomUUID } from "node:crypto";

import { LivroDTO } from "../dto/LivroDTO";
import { LivroParaAtualizarDTO } from "../dto/LivroParaAtualizarDTO";
import { LivroParaCriarDTO } from "../dto/LivroParaCriarDTO";
import { Livro } from "../modelos/Livro";
import { LivroDTOMapper } from "../objectmapper/LivroDTOMapper";
import { LivrosRepository } from "../repositorios/LivrosRepository";
import { ObjectMapper } from "@/common/ObjectMapper";

class LivrosService {

  private repository: LivrosRepository;

  private livroMapper: ObjectMapper<Livro, LivroDTO>;

  private novoLivroMapper: ObjectMapper<LivroParaCriarDTO, Livro>;

  public constructor(
    repository: LivrosRepository,
    livroMapper: ObjectMapper<Livro, LivroDTO>,
    novoLivroMapper: ObjectMapper<LivroParaCriarDTO, Livro>
  ) {
    this.repository = repository;
    this.livroMapper = livroMapper;
    this.novoLivroMapper = novoLivroMapper;
  }

  public async buscarTodos(): Promise<LivroDTO[]> {
    const livros = await this.repository.buscarTodos();

    return await this.livroMapper.mapearLista(livros);
  }

  public async buscarLivroPorIsbn(isbn: string): Promise<LivroDTO> {
    const livro = await this.repository.buscarPorIsbn(isbn);

    return await this.livroMapper.mapear(livro);
  }

  public async cadastrarNovoLivro(novoLivro: LivroParaCriarDTO): Promise<LivroDTO> {
    const livro = await this.novoLivroMapper.mapear(novoLivro);
    await this.repository.salvar(livro);

    return await this.livroMapper.mapear(livro);
  }

  public async atualizarLivro(isbn: string, dadosParaAtualizar: LivroParaAtualizarDTO): Promise<LivroDTO> {
    const livro = await this.repository.buscarPorIsbn(isbn);

    livro.nome = dadosParaAtualizar.nome;
    livro.sinopse = dadosParaAtualizar.sinopse;
    livro.autores = dadosParaAtualizar.autores;
    livro.urlImagem = dadosParaAtualizar.urlImagem;

    await this.repository.salvar(livro);

    return await this.livroMapper.mapear(livro);
  }

  public async deletarLivro(isbn: string): Promise<boolean> {
    const livro = await this.repository.buscarPorIsbn(isbn);
    const resultado = await this.repository.remover(livro.id as string);

    return resultado === 1;
  }
}

export { LivrosService };
