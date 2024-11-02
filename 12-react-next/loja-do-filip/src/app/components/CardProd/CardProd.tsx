"use client";
import React from "react";
import Image from "next/image";

export interface CardProps {
    src: string,
    altSrc: string,
    title: string,
    price: number
}

export default function CardProd({ src, altSrc, title, price }: CardProps) {
    return (
        <div className="card shadow-sm h-100">
            <Image
                src={src}
                className="card-img-top"
                alt={altSrc}
                width={300}
                height={320}
            />

            <div className="card-body bg-light">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">R$ {price}</p>
                <button className="btn btn-dark d-block w-100" type="button">
                    Adicionar no carrinho
                </button>
            </div>
        </div>
    );
}