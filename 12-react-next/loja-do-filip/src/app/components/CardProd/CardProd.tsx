"use client";
import React from "react";
import Image from "next/image";
import { Produto } from "@/app/types/produto";
import { useAddFavorito } from "@/app/hooks/useAddFavorito";
import { toast } from "react-toastify";

export interface CardProps {
    produto: Produto;
    addAoCarrinho: (produto: Produto) => void;
}

export default function CardProd({ produto, addAoCarrinho }: CardProps) {
    const { isPending, addFavorito } = useAddFavorito(
        () => toast.success("Produto favoritado com sucesso"),
        () => toast.error("Algo deu errado")
    );
    return (
        <div className="card shadow-sm h-100">
            <Image
                src={produto.fotos[0].src}
                className="card-img-top"
                alt={produto.fotos[0].titulo}
                width={300}
                height={320}
            />

            <div className="card-body bg-light">
                <h5 className="card-title">{produto.nome}</h5>
                <p className="card-text text-secondary">R$ {produto.preco}</p>
                <button className="btn btn-dark d-block w-100" type="button" onClick={() => addAoCarrinho(produto)}>
                    Adicionar no carrinho
                </button>
                <button className="btn btn-white d-block w-100" type="button" onClick={() => addFavorito(produto)}>
                    { isPending ?  "Favoritando": "Favoritar"}
                </button>
            </div>
        </div>
    );
}