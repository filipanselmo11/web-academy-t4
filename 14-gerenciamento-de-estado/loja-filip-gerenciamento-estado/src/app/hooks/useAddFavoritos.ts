import { useFavoritosContext } from "./useFavoritosContext";


export function useAddFavoritos() {

  const { setFavoritos } = useFavoritosContext();

  const adicionarAosFavoritos = (produto: Produto) => {
    setFavoritos((favoritos) => [...favoritos, produto]);
  };

  return adicionarAosFavoritos;

}