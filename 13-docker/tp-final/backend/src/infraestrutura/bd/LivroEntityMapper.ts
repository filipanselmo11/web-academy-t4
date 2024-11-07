import { ObjectMapper } from "@/common/ObjectMapper";
import { Livro } from "@/dominio/modelos/Livro";
import { LivroEntity } from "./Entidade";

class LivroEntityMapper extends ObjectMapper<LivroEntity, Livro> {

  public constructor() {
    super();
  }

  public async mapear(entity: LivroEntity): Promise<Livro> {
    return new Livro({
      id: entity.id,
      nome: entity.nome,
      sinopse: entity.sinopse,
      isbn: entity.isbn,
      urlImagem: entity.urlImagem!,
      autores: entity.autores as string[]
    });
  }
}

export { LivroEntityMapper };
