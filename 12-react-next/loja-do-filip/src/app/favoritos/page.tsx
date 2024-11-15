"use client";

import TableFavoritos from "../components/TableFavoritos/TableFavoritos";
import useFavoritos from "../hooks/useFavoritos";

export default function Favoritos() {
  const {
    favoritos,
    isPending,
    isError,
    refetchFavoritos
  } = useFavoritos();
  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="row card-body">
            <h5 className="card-title mb-4 fw-light">
              Produtos favoritados
            </h5>
            {isPending ? (
              <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Carregando...</span>
                </div>
              </div>
            ) : isError ? (
              <div className="alert alert-danger" role="alert">
                Ocorreu um erro ao carregar os produtos favoritados. Tente novamente mais tarde.
              </div>
            ) : (
              <TableFavoritos
                itensFavoritos={favoritos}
                refetchFavoritos={refetchFavoritos}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}