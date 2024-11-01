"use client";
import React from "react";
import Card from "./components/Card/Card";

export default function Home() {

  const prods = [
    { id: 1, title: 'Notebook 1', price: 1500 },
    { id: 2, title: 'Playstation 5', price: 4200 },
    { id: 3, title: 'Linkin Park: From 0', price: 20 },
    { id: 4, title: 'Geladeira', price: 1500 },
    { id: 5, title: 'Porsche Panamera', price: 15000000 },
    { id: 6, title: 'Iphone 30', price: 250000 },

  ];

  return (
    <>
      <main>
        <div className="container p-5">
          {/* Resumo Carrinho component */}
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
            {prods.map((prod) => (
              <div className="col" key={prod.id}>
                <Card
                  src="/placeholder.png"
                  altSrc="imagem placeholder"
                  title={prod.title}
                  price={prod.price}
                >
                </Card>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
