import { useContext } from "react";
import { FavoritosContext } from "../state/FavoritosProvider/FavoritosProvider";

export function useFavoritosContext() {
  const favoritosContext = useContext(FavoritosContext);

  if (!favoritosContext) {
    throw new Error(
      "useFavoritosContext deve ser usado dentro de um FavoritosProvider"
    );
  }

  return favoritosContext;
}