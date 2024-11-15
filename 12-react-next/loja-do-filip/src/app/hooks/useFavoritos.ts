import { useQuery } from "@tanstack/react-query";

export default function useFavoritos() {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["listaFavoritos"],
    queryFn: () => getFavoritos(),
  });

  return {
    favoritos: data,
    refetchFavoritos: refetch,
    isPending,
    isError
  }
}