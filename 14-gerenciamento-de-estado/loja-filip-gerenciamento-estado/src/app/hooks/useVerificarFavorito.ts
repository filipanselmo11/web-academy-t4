import { useFavoritosContext } from "./useFavoritosContext";

export function useVerificarFavorito() {
  const favoritosContext = useFavoritosContext();

  const { favoritos } = favoritosContext;

  const verificarFavorito = (id: string) => {
    return favoritos.some((item) => item.id === id);
  }

  return verificarFavorito;
}