import { useQuery } from "@tanstack/react-query";
import { getFavoritos } from "../services/produtos.service";

export default function useFavoritos() {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["listaFavoritos"],
    queryFn: () => getFavoritos(),
  });

  return {
    favoritos: data || [],
    refetchFavoritos: refetch,
    isPending,
    isError
  }
}