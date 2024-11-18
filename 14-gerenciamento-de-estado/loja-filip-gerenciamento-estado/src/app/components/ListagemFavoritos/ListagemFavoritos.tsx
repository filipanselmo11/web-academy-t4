"use client";
import ItemFavorito from "../ItemFavorito/ItemFavorito";

interface IListagemFavoritosProps {
  itensFavoritos: Produto[];
}

export default function ListagemFavoritos({
  itensFavoritos,
}: IListagemFavoritosProps) {
  return (
    // <div className="card mb-4">
    //   <div className="row card-body">
    //     <h5 className="card-title mb-4 fw-light">
    //       Lista de favoritos:
    //     </h5>
    //   </div>
    // </div>
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Preço</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {itensFavoritos.map((itemFavorito) => (
            <tr key={itemFavorito.id}>
              <ItemFavorito itemFavorito={itemFavorito} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
