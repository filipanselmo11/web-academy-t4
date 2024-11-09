import { Produto } from "../types/produto";
import api from "./api";

export async function getListaProdutos(): Promise<Produto[]> {
  const response = await api.get("/produto");
  return response.data;
}