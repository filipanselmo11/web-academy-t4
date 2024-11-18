"use client";
import { useFavoritosContext } from "@/app/state/FavoritosProvider/FavoritosProvider";
import Image from "next/image";

interface CardProdutoProps {
  produto: Produto;
};

export default function CardProduto({
  produto,
}: CardProdutoProps) {


  const { verificarFavorito, setFavoritos } = useFavoritosContext();

  const adicionarAosFavoritos = () => {

    setFavoritos((prevFavoritos) => [...prevFavoritos, produto]);
  };

  const ehFavorito = verificarFavorito(produto.id);

  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <Image
          src={produto.fotos[0].src}
          className="card-img-top"
          alt={produto.fotos[0].titulo}
          width={300}
          height={320}
        />
        <div className="card-body bg-light">
          <h5 className="card-title">
            {produto.nome}
          </h5>
          <p className="card-text text-secondary">
            R$ {produto.preco}
          </p>
          <button
            className="btn btn-success d-block w-100"
            type="button"
            onClick={adicionarAosFavoritos}
            disabled={ehFavorito}>
                {ehFavorito ? "Adicionado": "Adicionar aos favoritos"}
            </button>
        </div>
      </div>
    </div>
  );

}