"use client";
import { useRemoveFavorito } from "@/app/hooks/useRemoveFavorito";
import { Produto } from "@/app/types/produto";
import { useQueryClient  } from "@tanstack/react-query";
import { toast } from 'react-toastify';

interface ItemFavoritoProps {
  itemFavorito: Produto;
}

export default function ItemFavorito({ itemFavorito }: ItemFavoritoProps) {
  const queryClient = useQueryClient();

  const { isPending, removerFavorito } = useRemoveFavorito(
    () => {
      toast.success("Produto removido com sucesso!");
      queryClient.invalidateQueries({ queryKey: ["listaFavoritos"]});
    },
    () => toast.error("Algo deu errado")
  );

  return(
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
          className="btn btn-danger btn-sm"
          onClick={() => removerFavorito(itemFavorito)}
          >{ isPending ? "Removendo": "Remover" }</button>
      </td>
    </>
  );
}