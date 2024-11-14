import { Produto } from "../types/produto";
import api from "./api";
import newAPi from "./newApi";

export async function getListaProdutos(): Promise<Produto[]> {
  const response = await api.get("/produto");
  return response.data;
}

export async function addProdutoFavorito(produto: Produto) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return newAPi.post<Produto>("/favoritos", produto).then((response) => response.data);
}