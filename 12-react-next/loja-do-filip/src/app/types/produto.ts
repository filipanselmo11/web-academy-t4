import { Foto } from "./foto";

export interface Produto {
  id: string;
  fotos: Foto[];
  nome: string;
  preco: number;
  descricao: string;
  vendido: string;
  usuario_id: string;
}