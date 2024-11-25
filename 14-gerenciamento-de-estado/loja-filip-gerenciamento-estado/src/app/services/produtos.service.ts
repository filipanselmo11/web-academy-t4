import api from "./api";
import newAPi from "./newApi";

export async function getListaProdutos(): Promise<Produto[]> {
  const response = await api.get("/produto");
  console.log('SALVE ', response);
  return response.data;
}

export async function addProdutoFavorito(produto: Produto): Promise<Produto> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await newAPi.post<Produto>("/favoritos", produto);
    return response.data;
  } catch (error: any) {
    if (error.response?.status === 400) {
      console.error("Produto duplicado ou erro no servidor:", error.response.data);
      throw new Error("Produto já está nos favoritos.");
    }
    throw error;
  }
}

export async function getFavoritos(): Promise<Produto[]> {
  const response = await newAPi.get("/favoritos");
  return response.data;
}

export async function removeFavorito(produto: Produto): Promise<void> {
  const response = await newAPi.delete(`/favoritos/${produto.id}`);
  return response.data;
}