"use client";
import React, { useState } from "react";
import TableCarrinho from "../components/TableCarrinho/TableCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { ItemCarrinhoInterface } from "../types/itemCarrinho";
import ResumoCard from "../components/ResumoCard/ResumoCard";

export default function Carrinho() {
    const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinhoInterface[]>(mockItensCarrinho);

    // const quantidadeTotal = itensCarrinho.reduce((total, item) => total + item.quantidade, 0);
    // const valorTotal = itensCarrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

    let quantidadeTotal = 0;
    let valorTotal = 0;

    itensCarrinho.forEach((item) => {
        quantidadeTotal += item.quantidade;
        valorTotal += item.preco * item.quantidade;
    });

    const removerItemDoCarrinho = (id: string) => {
        setItensCarrinho(prevItens => prevItens.filter(item => item.id !== id));
    };

    return (
        <>
            <main>
                <div className="container p-5">
                    <div className="card mb-4">
                        <div className="row card-body">
                            <h5 className="card-title mb-4 fw-light">
                                Produtos selecionados
                            </h5>
                            <TableCarrinho
                                itens={itensCarrinho}
                                removerItemDoCarrinho={removerItemDoCarrinho}>
                            </TableCarrinho>
                        </div>
                    </div>
                    <ResumoCard
                        titulo="Resumo do carrinho"
                        quantidadeTotal={quantidadeTotal}
                        valorTotal={valorTotal}>
                    </ResumoCard>
                </div>
            </main>
        </>
    );
}