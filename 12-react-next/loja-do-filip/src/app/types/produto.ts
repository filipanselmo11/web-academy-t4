import { Foto } from "./foto";

export type Produto =  {
  id: string;
  fotos: Foto[];
  nome: string;
  preco: number;
  descricao: string;
  vendido: string;
  usuario_id: string;
}