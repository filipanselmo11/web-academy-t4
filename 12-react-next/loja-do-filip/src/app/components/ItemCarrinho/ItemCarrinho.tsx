"use client";
import { ItemCarrinhoInterface } from "@/app/types/itemCarrinho";
import React from "react";

export interface ItemCarrinhoProps {
  itemCarrinho: ItemCarrinhoInterface;
  removerItemDoCarrinho: (id: string) => void;
}

export default function ItemCarrinho({ itemCarrinho, removerItemDoCarrinho }: ItemCarrinhoProps) {
  const valorTotalProduto = (preco: number, quantidade: number): number => {
    return preco * quantidade;
  }
  return (
    <>
      <td>
        {itemCarrinho.nome}
      </td>
      <td>
        R$ {itemCarrinho.preco.toFixed(2)}
      </td>
      <td>
        {itemCarrinho.quantidade}
      </td>
      <td>
        R$ {valorTotalProduto(itemCarrinho.preco, itemCarrinho.quantidade).toFixed(2)}
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => removerItemDoCarrinho(itemCarrinho.id)}>Remover</button>
      </td>
    </>

  );
}