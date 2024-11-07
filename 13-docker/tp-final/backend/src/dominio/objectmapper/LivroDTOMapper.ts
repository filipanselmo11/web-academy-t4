import { ObjectMapper } from "@/common/ObjectMapper";
import { LivroDTO } from "../dto/LivroDTO";
import { Livro } from "../modelos/Livro";

class LivroDTOMapper extends ObjectMapper<Livro, LivroDTO> {

    public constructor(){
        super();
    }

    public async mapear(modelo: Livro): Promise<LivroDTO> {
        return {
            nome: modelo.nome,
            sinopse: modelo.sinopse,
            isbn: modelo.isbn,
            urlImagem: modelo.urlImagem,
            autores: modelo.autores
        };
    }
}

export { LivroDTOMapper };
