import { useMutation } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { addProdutoFavorito } from "../services/produtos.service";

export function useAddFavorito(onSuccess: () => void, onError: () => void) {
  // const { mutate, isLoading } = useMutation({
  //   mutationFn: (produto: Produto) => addProdutoFavorito(produto),
  //   onSuccess,
  //   onError,
  // });
  const mutation = useMutation({
    mutationFn: (produto: Produto) => addProdutoFavorito(produto),
    onSuccess,
    onError,
  });

  return {
    addFavorito: mutation.mutate,
    isPending: mutation.isPending,
  };
}