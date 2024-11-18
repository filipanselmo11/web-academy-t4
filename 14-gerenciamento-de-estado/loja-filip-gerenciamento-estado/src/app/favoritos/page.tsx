"use client";

import ResumoFavorito from "../components/ResumoFavoritos/ResumoFavoritos";
import { useFavoritosContext } from "../state/FavoritosProvider/FavoritosProvider";

export default function Favoritos () {
  const { favoritos } = useFavoritosContext();

  return (
    <main>
      <div className="container p-5">
        <ResumoFavorito produtos={favoritos}/>
      </div>
    </main>
  );
}