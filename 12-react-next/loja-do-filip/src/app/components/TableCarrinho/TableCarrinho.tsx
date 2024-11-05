"use client";
import React, { ReactNode } from "react";

export interface TableCarrinhoProps {
  children: ReactNode;
}

export default function TableCarrinho({ children }: TableCarrinhoProps) {
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
          {children}
        </tbody>
      </table>
    </div>
  );
}