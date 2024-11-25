"use client";

import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { addProdutoFavorito, removeFavorito } from "@/app/services/produtos.service";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { createContext } from "react";

interface IFavoritosContext {
  favoritos: Produto[];
  setFavoritos: Dispatch<SetStateAction<Produto[]>>;
  addFavorito: (produto: Produto) => void;
  rmFavorito: (produto: Produto) => void;
  verificarFavorito: (id: string) => boolean;
  valorTotalFavoritos: number;
  isAddingFavorito: boolean;
  isRemovingFavorito: boolean;
}

export const FavoritosContext = createContext<IFavoritosContext>({
  favoritos: [],
  setFavoritos: () => {},
  addFavorito: () => {},
  rmFavorito: () => {},
  verificarFavorito: () => false,
  valorTotalFavoritos: 0,
  isAddingFavorito: false,
  isRemovingFavorito: false,
});

export const FavoritosProvider = ({ children }: { children: ReactNode }) => {
  const [favoritos, setFavoritos] = useState<Produto[]>([]);

  const { mutate: addFavorito, isPending: isAddingFavorito } = useMutation({
    mutationFn: addProdutoFavorito,
    onSuccess: (novoProduto: Produto) => {
      setFavoritos((favoritos) => {
        const produtoJaExiste = favoritos.some(
          (favorito) => favorito.id === novoProduto.id
        );

        if (!produtoJaExiste) {
          return [...favoritos, novoProduto];
        }

        console.warn("Produto já está nos favoritos:", novoProduto);
        return favoritos;
      });
    },
    onError: (error) => {
      if (error.message === "Produto já está nos favoritos.") {
        console.warn(error.message);
      } else {
        console.error("Erro ao adicionar produto aos favoritos:", error);
      }
    },
  });

  const { mutate: rmFavorito, isPending: isRemovingFavorito } = useMutation({
    mutationFn: removeFavorito,
    onSuccess: (_, produtoRemovido) => {
      setFavoritos((favoritos) =>
        favoritos.filter((produto) => produto.id !== produtoRemovido.id)
      );
    },
    onError: (error) => {
      console.error("Erro ao remover produto dos favoritos:", error);
    },
  });

  const verificarFavorito = (id: string) => {
    return favoritos.some((item) => item.id === id);
  };

  const valorTotalFavoritos = favoritos.reduce((acc, produto) => {
    return acc + calculaValorComPorcentagemDeDesconto(produto.preco, produto.desconto)
  }, 0);


  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        addFavorito,
        rmFavorito,
        verificarFavorito,
        valorTotalFavoritos,
        isAddingFavorito,
        isRemovingFavorito,
      }}
    >
      {children}
    </FavoritosContext.Provider>
  );
};

export const useFavoritosContext = () => {
  const favoritosContext = useContext(FavoritosContext);

  if (!favoritosContext) {
    throw new Error(
      "useFavoritosContext deve ser usado dentro de um FavoritosProvider"
    );
  }

  return favoritosContext;
};
