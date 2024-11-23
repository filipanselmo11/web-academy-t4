"use client";

import { createContext, useState } from "react";
import ResumoFavorito from "../components/ResumoFavoritos/ResumoFavoritos";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <main>
      <FavoritosContext.Provider value={{
        favoritos,
        setFavoritos
      }}>
        <div className="container p-5">
          <ResumoFavorito produtos={favoritos} />
        </div>
      </FavoritosContext.Provider>
    </main>
  );
}
