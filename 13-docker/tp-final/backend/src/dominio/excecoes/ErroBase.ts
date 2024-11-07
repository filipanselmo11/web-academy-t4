abstract class ErroBase extends Error {

  private readonly _tipo: string;

  private readonly _mensagem: string;

  private readonly _extras: any;

  public constructor(
    tipo: string,
    mensagem: string,
    extras: any
  ) {
    super(mensagem);

    this._tipo = tipo;
    this._mensagem = mensagem;
    this._extras = extras;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get mensagem(): string {
    return this._mensagem;
  }

  public get extras(): any {
    return this._extras;
  }
}

export { ErroBase };
