"use client";

import { mockProdutos } from "./mocks/produtos";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { useState, createContext } from "react";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
});

export default function App() {
  const produtos = mockProdutos;

  const [favoritos, setFavoritos] = useState<Produto[]>([]);


  return (
    <main>
      <FavoritosContext.Provider value={{
        favoritos,
        setFavoritos
      }}>
        <div className="container p-5">
          <ListagemProdutos produtos={produtos} />
        </div>
      </FavoritosContext.Provider>
    </main>
  );
}
