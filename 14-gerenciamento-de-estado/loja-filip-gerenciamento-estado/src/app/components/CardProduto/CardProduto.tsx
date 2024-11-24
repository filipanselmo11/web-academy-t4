"use client";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { useAddFavoritos } from "@/app/hooks/useAddFavoritos";
import { useFavoritosContext } from "@/app/hooks/useFavoritosContext";
import { useVerificarFavorito } from "@/app/hooks/useVerificarFavorito";
import Image from "next/image";

interface CardProdutoProps {
  produto: Produto;
}

export default function CardProduto({ produto }: CardProdutoProps) {

  const verificarFavorito = useVerificarFavorito();

  const adicionarAosFavoritos = useAddFavoritos();

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
              disabled={verificarFavorito(produto.id)}
            >
              {verificarFavorito(produto.id) ? "Adicionado" : "Adicionar aos favoritos"}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
