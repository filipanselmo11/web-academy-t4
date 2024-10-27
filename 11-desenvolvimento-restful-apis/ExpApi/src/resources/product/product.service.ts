import { PrismaClient, Product } from "@prisma/client";
import { CreateProductDto, ProductDto, UpdateProductDto } from "./product.types";


const prisma = new PrismaClient();

export const getAllProducts = async (): Promise<Product[]> => {
    return prisma.product.findMany();
};

export const checkAlreadExists = async (name: string): Promise<boolean> => {
    return !!(await prisma.product.findUnique({
        where: { name: name }
    }));
};

export const checkById = async (id: string): Promise<boolean> => {
    return !!(await prisma.product.findUnique({
        where: { id: id }
    }));
};

export const createProduct = async (product: CreateProductDto): Promise<Product> => {
    return prisma.product.create({
        data: product
    });
};

export const readProduct = async (id: string): Promise<ProductDto | null> => {
    return prisma.product.findFirst({
        where: { id: id }
    });
};

export const updateProduct = async (id: string, product: UpdateProductDto): Promise<Product> => {
    return prisma.product.update({
        where: { id: id },
        data: { ...product }
    });
};

export const deleteProduct = async (id: string): Promise<void> => {
    await prisma.product.delete({
        where: { id: id }
    })
};