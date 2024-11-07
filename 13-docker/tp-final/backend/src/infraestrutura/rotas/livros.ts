import { LivrosController } from "../controllers/LivroController";
import { Router } from "express";

const rotasLivros = Router();
const livrosController = new LivrosController();

rotasLivros.get("/", livrosController.buscarTodos.bind(livrosController));
rotasLivros.get("/:isbn", livrosController.buscarLivroPorIsbn.bind(livrosController));
rotasLivros.post("/", livrosController.cadastrarNovoLivro.bind(livrosController));
rotasLivros.patch("/:isbn", livrosController.atualizarLivro.bind(livrosController));
rotasLivros.delete("/:isbn", livrosController.deletarLivro.bind(livrosController));

export { rotasLivros };