"use client";

import { useGetProduto } from "@/app/hooks/useGetProduto";
import Image from "next/image";
import { useParams } from "next/navigation";

export default function Produto() {
  const { nome } = useParams();
  const nomeProduto = Array.isArray(nome) ? nome[0] : nome;

  const { produto, isLoading, isError } = useGetProduto(nomeProduto);

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar Produto</p>
  }

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

            <h5 className="card-title mb-4 fw-bold">Nome produto: {produto?.nome}</h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
              {produto?.fotos?.map((foto, index) => (
                <Image key={index} src={foto.src} alt={foto.titulo} width={300} height={320} />
              ))}
            </div>

            <p className="card-text fw-medium">
              Valor: R${Number(produto?.preco).toFixed(2)}
            </p>
            <p className="card-text fw-medium">Descrição: {produto?.descricao}</p>
            <p className="card-text fw-medium">Anunciado por: {produto?.usuario_id}</p>
          </div>
        </div>
      </div>
    </main>
  );
}