"use client";

import { createContext, useState } from "react";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

export const FavoritosProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos
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