import { ErroBase } from "./ErroBase";

class RegistroNaoEncontradoError extends ErroBase {

  public constructor(mensagem: string = "Registro não encontrado.") {
    super("NAO_ENCONTRADO", mensagem, null);
  }
}

export { RegistroNaoEncontradoError };
