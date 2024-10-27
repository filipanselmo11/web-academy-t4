import { Product } from "@prisma/client";

// export interface ProductDto {
//     id: number;
//     name: string;
//     price: number;
// }

// export interface CreateProductDto {
//     name: string;
//     price: number;
// }

export type CreateProductDto = Pick<Product, "name" | "price" | "stockQuantity">;

export type ProductDto = Product;

export type UpdateProductDto = Partial<Product>;