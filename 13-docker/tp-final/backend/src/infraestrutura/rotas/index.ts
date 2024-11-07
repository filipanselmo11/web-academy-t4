import { rotasLivros } from "./livros";
import { HomeController } from "../controllers/HomeController";

import { Router } from "express";

const rotas = Router();
const homeController = new HomeController();

rotas.get("/", homeController.home.bind(homeController));

rotas.use("/livros", rotasLivros);

export { rotas };
