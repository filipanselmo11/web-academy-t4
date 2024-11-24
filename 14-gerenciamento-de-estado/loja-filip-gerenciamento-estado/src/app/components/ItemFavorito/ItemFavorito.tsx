"use client";
import { calculaValorComPorcentagemDeDesconto } from "@/app/helpers";
import { useRemoverFavorito } from "@/app/hooks/useRemoverFavorito";
import Image from "next/image";

interface ItemfavoritosProps {
  itemFavorito: Produto;
}

export default function ItemFavorito({ itemFavorito }: ItemfavoritosProps) {

  const removerFavorito = useRemoverFavorito();

  return (
    <tr key={itemFavorito.id}>
      <td className="d-flex flex-row">
        <Image
          className="rounded"
          src={itemFavorito.fotos[0].src}
          alt={itemFavorito.fotos[0].titulo}
          width={50}
          height={50}
        />
        <div className="d-flex flex-column ms-2">
          <span>
            {itemFavorito.nome}
          </span>
          <small className="text-muted">
            {itemFavorito.descricao}
          </small>
        </div>
      </td>
      <td>
        R${" "}
        {calculaValorComPorcentagemDeDesconto(itemFavorito.preco, itemFavorito.desconto).toFixed(2)}
      </td>
      <td>
        {itemFavorito.desconto}%
      </td>
      <td>
        <button
          onClick={() => removerFavorito(itemFavorito.id)}
          className="btn btn-outline-danger btn-sm">
          Remover
        </button>
      </td>
    </tr>
    // <>
    //   <td>
    //     {itemFavorito.nome}
    //   </td>
    //   <td>
    //     R$ {itemFavorito.preco.toFixed(2)}
    //   </td>
    //   <td>
    //     <button
    //       type="button"
    //       onClick={() => removerFavorito(itemFavorito.id)}
    //       className="btn btn-danger btn-sm">
    //       Remover
    //     </button>
    //   </td>
    // </>
  );
}