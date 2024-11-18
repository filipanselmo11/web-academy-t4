import { useContext } from "react";
import CardProduto from "../CardProduto/CardProduto";
import { useFavoritosContext } from "@/app/state/FavoritosProvider/FavoritosProvider";

// interface ResumoFavoritoProps {
//   favoritos: Produto[];
//   setFavoritos: React.Dispatch<React.SetStateAction<Produto[]>>;
// };

export default function ResumoFavorito() {

  const { favoritos } = useFavoritosContext();

  return (
    <div className="mt-4">
      <h5 className="mb-4">
        Seus produtos favoritos:
      </h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {favoritos.map((produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
          />
        ))}
      </div>
    </div>
  );
}