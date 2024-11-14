"use client";
import React, { useState } from "react";
import ResumoCard from "./components/ResumoCard/ResumoCard";
import ListagemProd from "./components/ListagemProd/ListagemProd";
import { Produto } from "./types/produto";
import { useListaProdutos } from "./hooks/useListaProdutos";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
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
      <ToastContainer />
      <main>
        <div className="container p-5">
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ResumoCard
            titulo="Resumo do Carrinho"
            quantidadeTotal={quantidadeTotalItens}
            valorTotal={valorTotal}
            setValorTotal={setValorTotal}
            setQuantidadeTotalItens={setQuantidadeTotalItens}
          />
          <ListagemProd
            produtos={produtos}
            addAoCarrinho={addAoCarrinho}
          />
        </div>
      </main>
    </>
  );
}
