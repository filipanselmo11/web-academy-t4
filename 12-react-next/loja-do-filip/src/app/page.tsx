"use client";
import React from "react";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
              <p className="card-text fw-medium">Quantidade total: 10</p>
              <p className="card-text fw-medium">
                Valor total: R${(1500).toFixed(2)}
              </p>
            </div>
          </div>

          <h5 className="mb-3">Produtos disponíveis:</h5>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            <div className="col">
              <Card></Card>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
