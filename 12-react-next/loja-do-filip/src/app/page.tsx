"use client";
import React from "react";
import CardProd from "./components/CardProd/CardProd";
import ResumoCard from "./components/ResumoCard/ResumoCard";
import ListagemProd from "./components/ListagemProd/ListagemProd";

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
          <h5 className="mb-3">Produtos disponíveis:</h5>
          <ResumoCard
            title="Resumo do Carrinho"
            quantity={10}
            totalValue={2000}>
          </ResumoCard>

          <ListagemProd bootstrapClass="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
            {prods.map((prod) => (
              <div className="col" key={prod.id}>
                <CardProd
                  src="/placeholder.png"
                  altSrc="imagem placeholder"
                  title={prod.title}
                  price={prod.price}
                >
                </CardProd>
              </div>
            ))}
          </ListagemProd>
        </div>
      </main>
    </>
  );
}
