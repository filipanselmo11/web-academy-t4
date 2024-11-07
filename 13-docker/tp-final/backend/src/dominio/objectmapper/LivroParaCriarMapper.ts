import { randomUUID } from "node:crypto";

import { ObjectMapper } from "@/common/ObjectMapper";
import { LivroParaCriarDTO } from "../dto/LivroParaCriarDTO";
import { Livro } from "../modelos/Livro";

class LivroParaCriarMapper extends ObjectMapper<LivroParaCriarDTO, Livro> {

    public constructor(){
        super();
    }

    public async mapear(dto: LivroParaCriarDTO): Promise<Livro> {
        return new Livro({
            id: randomUUID(),
            nome: dto.nome,
            sinopse: dto.sinopse,
            isbn: dto.isbn,
            urlImagem: dto.urlImagem,
            autores: dto.autores
        });
    }
}

export { LivroParaCriarMapper };
