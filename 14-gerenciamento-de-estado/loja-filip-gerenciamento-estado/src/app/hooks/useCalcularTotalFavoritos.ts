import { calculaValorComPorcentagemDeDesconto } from "../helpers";
import { useFavoritosContext } from "./useFavoritosContext";

export function useCalcularValorTotalFavoritos() {
  const { favoritos } = useFavoritosContext();

  const valorTotalFavoritos = favoritos.reduce((acc, produto) => {
    return acc + calculaValorComPorcentagemDeDesconto(produto.preco, produto.desconto);
  }, 0);

  return valorTotalFavoritos;
}