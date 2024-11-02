"use client";
import React from "react";

export interface ItemCarrinhoProps {
  id?: number;
  name: string;
  price: number;
  quantity: number;
}

export default function ItemCarrinho({ name, price, quantity }: ItemCarrinhoProps) {
  const valorTotalProduto = (price: number, quantity: number): number => {
    return price * quantity;
  }
  return (
    <>
      <td>
        {name}
      </td>
      <td>
        R$ {price.toFixed(2)}
      </td>
      <td>
        {quantity}
      </td>
      <td>
        R$ {valorTotalProduto(price, quantity).toFixed(2)}
      </td>
      <td>
        <button className="btn btn-danger btn-sm">Remover</button>
      </td>
    </>

  );
}