"use client";
import React, { useState } from "react";
import ResumoCard from "./components/ResumoCard/ResumoCard";
import ListagemProd from "./components/ListagemProd/ListagemProd";
import { mockProdutos } from "./mocks/produtos";
import { Produto } from "./types/produto";

export default function Home() {

  const produtos = mockProdutos;

  const [quantidadeTotalItens, setQuantidadeTotalItens] = useState<number>(0);

  const [valorTotal, setValorTotal] = useState<number>(0);

  const addAoCarrinho = (produto: Produto) => {
    setQuantidadeTotalItens((quantidade) => quantidade + 1);
    setValorTotal((valor) => valor + produto.preco);
  };

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
