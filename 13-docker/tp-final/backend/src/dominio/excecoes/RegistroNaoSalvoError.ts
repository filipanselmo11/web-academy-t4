import { ErroBase } from "./ErroBase";

class RegistroNaoSalvoError extends ErroBase {

  public constructor(mensagem: string = "Registro não salvo na base de dados.") {
    super("RESTRICAO", mensagem, null);
  }
}

export { RegistroNaoSalvoError };
