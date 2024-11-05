"use client";
import React from "react";
import TableCarrinho from "../components/TableCarrinho/TableCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho/ResumoCarrinho";
import ItemCarrinho from "../components/ItemCarrinho/ItemCarrinho";

export default function Carrinho() {
    const itensCarrinho = [
        { id: 1, name: 'Notebook 1', price: 1500, quantity: 30 },
        { id: 2, name: 'Playstation 5', price: 4200, quantity: 10 },
        { id: 3, name: 'Linkin Park: From 0', price: 20, quantity: 900 },
        { id: 4, name: 'Geladeira', price: 1500, quantity: 30 },
        { id: 5, name: 'Porsche Panamera', price: 15000000, quantity: 2 },
        { id: 6, name: 'Iphone 30', price: 250000, quantity: 4 },
    ];

    return (
        <>
            <main>
                <div className="container p-5">
                    <div className="card mb-4">
                        <div className="row card-body">
                            <h5 className="card-title mb-4 fw-light">
                                Produtos selecionados
                            </h5>
                            <TableCarrinho>
                                {itensCarrinho.map((item) => (
                                    <tr key={item.id}>
                                        <ItemCarrinho
                                            name={item.name}
                                            price={item.price}
                                            quantity={item.quantity}>
                                        </ItemCarrinho>
                                    </tr>
                                ))}
                            </TableCarrinho>
                        </div>
                    </div>
                    <ResumoCarrinho title="Resumo do carrinho" totalQuantity={7} totalValue={15000}></ResumoCarrinho>
                </div>
            </main>
        </>
    );
}