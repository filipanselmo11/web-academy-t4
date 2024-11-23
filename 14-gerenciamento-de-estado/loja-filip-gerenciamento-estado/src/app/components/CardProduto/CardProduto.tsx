"use client";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { FavoritosContext } from "@/app/page";
import Image from "next/image";
import { useContext } from "react";

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {

  const favoritosContext = useContext(FavoritosContext);

  if (!favoritosContext) {
    throw new Error("FavoritosContext não foi encontrado. Certifique-se de que o componente está dentro do Provider");
  }

  const {
    favoritos,
    setFavoritos
  } = favoritosContext;

  const adicionarAosFavoritos = (produto: Produto) => {
    setFavoritos((favoritos) => [...favoritos, produto])
  };

  const ehFavorito = favoritos.some((item) => item.id === produto.id);

  const mostrarImagem = true;
  const mostrarBotao = true;

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        {mostrarImagem ? (
          <Image
            src={produto.fotos[0].src}
            className="card-img-top"
            alt={produto.fotos[0].titulo}
            width={300}
            height={320}
          />
        ) : null}
        <div className="card-body bg-light">
          <span className="badge text-bg-success text-white mb-2">
            {produto.desconto} % de desconto
          </span>
          <h5 className="card-title">{produto.nome}</h5>
          <span className="card-text text-secondary">
            De R$ {produto.preco}
          </span>
          <h5 className="card-text">
            Por R${" "}
            {calculaValorComPorcentagemDeDesconto(
              produto.preco,
              produto.desconto
            )}
          </h5>
          {mostrarBotao ? (
            <button
              className="btn btn-success d-block w-100"
              type="button"
              onClick={() => adicionarAosFavoritos(produto)}
              disabled={ehFavorito}
            >
              {ehFavorito ? "Adicionado" : "Adicionar aos favoritos"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
