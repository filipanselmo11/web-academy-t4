"use client";

import { Produto } from "@/app/types/produto";
import ItemFavorito from "../ItemFavorito/ItemFavorito";

interface IListagemFavoritosProps {
  itensFavoritos: Produto[];
  refetchFavoritos: () => void;
}

export default function TableFavoritos({ itensFavoritos, refetchFavoritos }: IListagemFavoritosProps) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>Produto</tr>
          <tr>Valor</tr>
          <tr>Opções</tr>
        </thead>
        <tbody>
          {itensFavoritos.map((itemFavorito) => (
            <tr key={itemFavorito.id}>
              <ItemFavorito
                itemFavorito={itemFavorito}
                refetchFavoritos={refetchFavoritos}></ItemFavorito>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}