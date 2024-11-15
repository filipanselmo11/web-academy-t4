"use client";

import useFavoritos from "../hooks/useFavoritos";

export default function Favoritos() {
  const { favoritos, isPending, isError, refetchFavoritos } = useFavoritos();
  return (
    <h1>
      Favoritos Page
    </h1>
  );
}