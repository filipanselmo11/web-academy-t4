"use client";
import { Produto } from "@/app/types/produto";
import React from "react";
import CardProd from "../CardProd/CardProd";

export interface ListagemProdProps {
  addAoCarrinho: (produto: Produto) => void;
  produtos: Produto[];
}

export default function ListagemProd({ produtos, addAoCarrinho }: ListagemProdProps) {

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
      {produtos.map((produto) => (
        <div className="col" key={produto.id}>
          <CardProd
            produto={produto}
            addAoCarrinho={() => addAoCarrinho(produto)}></CardProd>
        </div>
      ))}
    </div>
  );
}