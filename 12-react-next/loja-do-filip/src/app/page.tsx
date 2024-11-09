"use client";
import React, { useState } from "react";
import ResumoCard from "./components/ResumoCard/ResumoCard";
import ListagemProd from "./components/ListagemProd/ListagemProd";
// import { mockProdutos } from "./mocks/produtos";
import { Produto } from "./types/produto";
import { useListaProdutos } from "./hooks/useListaProdutos";
// import api from "./services/api";

export default function Home() {

  // const produtos = mockProdutos;

  const { produtos, isLoading, isError } = useListaProdutos();


  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);

  const [valorTotal, setValorTotal] = useState<number>(0);

  const addAoCarrinho = (produto: Produto) => {
    setQuantidadeTotalItens((quantidade) => quantidade + 1);
    setValorTotal((valor) => valor + produto.preco);
  };

  if (isLoading) return <h5>Carregando...</h5>;
  if (isError) return <h5>Erro ao carregar produtos</h5>;
  if (!produtos || produtos.length === 0) return <h5>Não há produtos disponíveis no momento</h5>;

  return (
    <>
      <main>
        <div className="container p-5">
          {/* Resumo Carrinho component */}
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ResumoCard
            titulo="Resumo do Carrinho"
            quantidadeTotal={quantidadeTotalItens}
            valorTotal={valorTotal}
            setValorTotal={setValorTotal}
            setQuantidadeTotalItens={setQuantidadeTotalItens}>
          </ResumoCard>
          <ListagemProd produtos={produtos} addAoCarrinho={addAoCarrinho}></ListagemProd>
        </div>
      </main>
    </>
  );
}
