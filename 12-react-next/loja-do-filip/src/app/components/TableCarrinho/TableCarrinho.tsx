"use client";
import { ItemCarrinhoInterface } from "@/app/types/itemCarrinho";
import React from "react";
import ItemCarrinho from "../ItemCarrinho/ItemCarrinho";

export interface TableCarrinhoProps {
  itens: ItemCarrinhoInterface[];
  removerItemDoCarrinho: (id: string) => void;
}

export default function TableCarrinho({ itens, removerItemDoCarrinho }: TableCarrinhoProps) {
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
                itemCarrinho={item}
                removerItemDoCarrinho={() => removerItemDoCarrinho(item.id)}></ItemCarrinho>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}