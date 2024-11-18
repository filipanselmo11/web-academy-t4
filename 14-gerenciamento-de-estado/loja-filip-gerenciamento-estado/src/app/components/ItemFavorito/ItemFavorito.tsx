"use client";
import { useFavoritosContext } from "@/app/state/FavoritosProvider/FavoritosProvider";

interface ItemfavoritosProps {
  itemFavorito: Produto;
};

export default function ItemFavorito({
  itemFavorito,
}: ItemfavoritosProps) {

  const { removerFavorito } = useFavoritosContext();

  return (
    <>
      <td>
        {itemFavorito.nome}
      </td>
      <td>
        R$ {itemFavorito.preco.toFixed(2)}
      </td>
      <td>
        <button
          type="button"
          onClick={() => removerFavorito(itemFavorito.id)}
          className="btn btn-danger btn-sm">
          Remover
        </button>
      </td>
    </>
  );
}