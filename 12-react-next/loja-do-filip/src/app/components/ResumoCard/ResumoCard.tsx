"use client";
import React from "react";

export interface ResumoCardProps {
  titulo: string;
  quantidadeTotal: number;
  valorTotal: number;
  setQuantidadeTotalItens?: React.Dispatch<React.SetStateAction<number>>;
  setValorTotal?: React.Dispatch<React.SetStateAction<number>>;
}

export default function ResumoCard({ titulo, quantidadeTotal, valorTotal }: ResumoCardProps) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">{titulo}</h5>
        <p className="card-text fw-medium">Quantidade total: {quantidadeTotal}</p>
        <p className="card-text fw-medium">
          Valor total: R$ {valorTotal}
        </p>
      </div>
    </div>
  );
}