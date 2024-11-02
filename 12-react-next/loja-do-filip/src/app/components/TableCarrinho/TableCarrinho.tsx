"use client";
import React from "react";
import ItemCarrinho, { ItemCarrinhoProps } from "../ItemCarrinho/ItemCarrinho";

export interface TableCarrinhoProps {
  itens: ItemCarrinhoProps[];
}

export default function TableCarrinho({ itens }: TableCarrinhoProps) {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Valor Unitário</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.id}>
              <ItemCarrinho
                name={item.name}
                price={item.price}
                quantity={item.quantity}>
              </ItemCarrinho>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}