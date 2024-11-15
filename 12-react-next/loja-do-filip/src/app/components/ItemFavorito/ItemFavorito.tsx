"use client";
import { useRemoveFavorito } from "@/app/hooks/useRemoveFavorito";
import { Produto } from "@/app/types/produto";
import { toast } from 'react-toastify';

interface ItemFavoritoProps {
  itemFavorito: Produto;
  refetchFavoritos: () => void;
}

export default function ItemFavorito({ itemFavorito, refetchFavoritos }: ItemFavoritoProps) {

  const { isPending, removerFavorito } = useRemoveFavorito(
    () => {
      toast.success("Produto removido com sucesso!");
      refetchFavoritos();
    },
    () => toast.error("Algo deu errado")
  );

  return(
    <>
      <td>
        {itemFavorito.nome}
      </td>
      <td>
        R$ {itemFavorito.preco}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => removerFavorito(itemFavorito)}
          >{ isPending ? "Removendo": "Remover" }</button>
      </td>
    </>
  );
}