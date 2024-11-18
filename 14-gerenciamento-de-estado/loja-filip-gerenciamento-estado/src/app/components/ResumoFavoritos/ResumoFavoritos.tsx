"use client";

import ListagemFavoritos from "../ListagemFavoritos/ListagemFavoritos";

interface ResumoFavoritoProps {
  produtos: Produto[];
}

export default function ResumoFavorito({ produtos }: ResumoFavoritoProps) {
  return (
    <div className="mt-4">
      <h5 className="mb-4">Seus produtos favoritos:</h5>
      {produtos.length > 0 ? (
        <ListagemFavoritos itensFavoritos={produtos} />
      ) : (
        <p>Nenhum produto foi favoritado.</p>
      )}
    </div>
  );
}
