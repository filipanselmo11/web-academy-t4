"use client";
import React from "react";

export interface ResumoCardProps {
  title: string;
  quantity: number;
  totalValue: number
}

export default function ResumoCard({ title, quantity, totalValue }: ResumoCardProps) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        {/* <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: 10</p>
        <p className="card-text fw-medium">
          Valor total: R${(1500).toFixed(2)}
        </p> */}
        <h5 className="card-title mb-4 fw-light">{title}</h5>
        <p className="card-text fw-medium">Quantidade total: {quantity}</p>
        <p className="card-text fw-medium">
          Valor total: R$ {totalValue.toFixed(2)}
        </p>
      </div>
    </div>
  );
}