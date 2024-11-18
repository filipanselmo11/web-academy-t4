"use client";

import { mockProdutos } from "./mocks/produtos";
import ListagemProdutos from "./components/ListagemProdutos/ListagemProdutos";
import { FavoritosProvider } from "./state/FavoritosProvider/FavoritosProvider";
export default function App() {
  const produtos = mockProdutos;

  return (
    <main>
      <div className="container p-5">
        <FavoritosProvider>
          <ListagemProdutos produtos={produtos} />
        </FavoritosProvider>
      </div>
    </main>
  );
}
