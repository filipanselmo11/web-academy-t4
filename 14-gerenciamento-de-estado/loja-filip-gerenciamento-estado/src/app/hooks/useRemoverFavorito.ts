import { useFavoritosContext } from "./useFavoritosContext";

export function useRemoverFavorito() {

  const { setFavoritos } = useFavoritosContext();

  const removerFavorito = (id: string) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
  };

  return removerFavorito;
}