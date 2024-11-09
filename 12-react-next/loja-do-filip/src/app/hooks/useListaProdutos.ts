import { useQuery } from "@tanstack/react-query";
import { getListaProdutos } from "../services/produtos.service";
import { Produto } from "../types/produto";

export function useListaProdutos() {
  const { data, isLoading, isError } = useQuery<Produto[]>({
    queryKey: ["listaProdutos"],
    queryFn: getListaProdutos,
  });

  return {
    produtos: data,
    isLoading,
    isError
  };
}