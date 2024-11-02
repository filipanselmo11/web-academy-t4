"use client";
import React, { ReactNode } from "react";

export interface ListagemProdProps {
  children: ReactNode;
  bootstrapClass: string;
}

export default function ListagemProd({ children, bootstrapClass }: ListagemProdProps) {
  return (
    <div className={bootstrapClass}>
      {children}
    </div>
  );
}