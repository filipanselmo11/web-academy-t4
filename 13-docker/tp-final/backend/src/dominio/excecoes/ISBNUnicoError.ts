import { ErroBase } from "./ErroBase";

class ISBNUnicoError extends ErroBase {

  public constructor(mensagem: string = "ISBN repetido.") {
    super("RESTRICAO", mensagem, null);
  }
}

export { ISBNUnicoError };
