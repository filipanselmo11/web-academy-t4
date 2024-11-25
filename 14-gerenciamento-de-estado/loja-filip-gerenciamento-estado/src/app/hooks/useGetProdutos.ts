import { useQuery } from "@tanstack/react-query";
import { getListaProdutos } from "../services/produtos.service";


export function useGetProdutos() {
  const {data, isLoading, isError } = useQuery<Produto[]>({
    queryKey: ["listaProdutos"],
    queryFn: getListaProdutos
  });

  return {
    produtos: data,
    isLoading,
    isError
  }
}