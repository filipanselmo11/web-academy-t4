import { Produto } from "../types/produto";
import api from "./api";
import newAPi from "./newApi";

export async function getListaProdutos(): Promise<Produto[]> {
  const response = await api.get("/produto");
  console.log(response);
  return response.data;
}

export async function addProdutoFavorito(produto: Produto): Promise<Produto> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await newAPi.post<Produto>("/favoritos", produto);
  return response.data;
}

export async function removeFavorito(produto: Produto): Promise<void> {
  const response = await newAPi.delete(`/favoritos/${produto.id}`);
  return response.data;
}