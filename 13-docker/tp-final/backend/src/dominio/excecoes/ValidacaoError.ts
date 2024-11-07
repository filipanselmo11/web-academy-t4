import { ErroBase } from "./ErroBase";

class ValidacaoError extends ErroBase {

  public constructor(mensagem: string, extras: object) {
    super("VALIDACAO", mensagem, extras);
  }
}

export { ValidacaoError };
