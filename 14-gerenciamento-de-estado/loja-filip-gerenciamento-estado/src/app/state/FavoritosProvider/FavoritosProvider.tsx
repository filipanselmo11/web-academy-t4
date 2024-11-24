"use client";

import { createContext, useContext, useState } from "react";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
  removerFavorito: (id: string) => void;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
  removerFavorito: () => {},
});

export const FavoritosProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const removerFavorito = (id: string) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((item) => item.id !== id));
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        removerFavorito
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

// export const useFavoritosContext = () => {
//   const favoritosContext = useContext(FavoritosContext);

//   if (!favoritosContext) {
//     throw new Error(
//       "useFavoritosContext deve ser usado dentro de um FavoritosProvider"
//     );
//   }

//   return favoritosContext;

// };