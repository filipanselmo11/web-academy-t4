import { useQuery } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import { getProduto } from "../services/produtos.service";


export function useGetProduto(nome: string) {
  const { data, isLoading, isError } = useQuery<Produto>({
    queryKey: ["produto", nome],
    queryFn: () => getProduto(nome)
  });

  return {
    produto: data,
    isLoading,
    isError
  }
}