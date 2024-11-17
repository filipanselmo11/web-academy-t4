
import { FavoritosContext } from "@/app/page";
import Image from "next/image";
import { useContext } from "react";

interface CardProdutoProps {
  produto: Produto;
};

export default function CardProduto({
  produto,
}: CardProdutoProps) {

  const favoritosContext = useContext(FavoritosContext);

  if (!favoritosContext) {
    throw new Error("FavoritosContext não foi encontrado. Certifique-se de que o componente está dentro do Provider");
  }

  const { favoritos, setFavoritos } = favoritosContext;

  const adicionarAosFavoritos = (produto: Produto) => {

    setFavoritos((favoritos) => [...favoritos, produto]);
  };

  const ehFavorito = favoritos.some((item) => item.id === produto.id);

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
            onClick={() => adicionarAosFavoritos(produto)}
            disabled={ehFavorito}>
                {ehFavorito ? "Adicionado": "Adicionar aos favoritos"}
            </button>
        </div>
      </div>
    </div>
  );

}