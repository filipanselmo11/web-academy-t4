import { useMutation } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { removeFavorito } from "../services/produtos.service";


export function useRemoveFavorito(onSuccess: () => void, onError: () => void) {
  const mutation = useMutation({
    mutationFn: (produto: Produto) => removeFavorito(produto),
    onSuccess,
    onError
  });

  return {
    removerFavorito: mutation.mutate,
    isPending: mutation.isPending,
  }
}