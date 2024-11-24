import { useFavoritosContext } from "./useFavoritosContext";

export function useVerificarFavorito() {

  const { favoritos } = useFavoritosContext();

  const verificarFavorito = (id: string) => {
    return favoritos.some((item) => item.id === id);
  }

  return verificarFavorito;
}