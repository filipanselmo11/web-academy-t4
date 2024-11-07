import { Request, Response } from "express";

class HomeController {

  public async home(req: Request, res: Response): Promise<void> {
    res.json({
      nome: "webacademy-livros-backend",
      versao: "1.0.0",
      dataVersao: "2023-11-07",
      responsaveis: [
        {
          nome: "filipanselmo",
          email: "filipanselmoalvesdasilva870@@gmail.com",
          github: "https://github.com/filipanselmo11"
        }
      ]
    });
  }
}

export { HomeController };
