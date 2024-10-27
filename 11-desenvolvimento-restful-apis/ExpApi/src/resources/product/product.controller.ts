import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { checkAlreadExists, checkById, createProduct, deleteProduct, getAllProducts, readProduct, updateProduct } from "./product.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateProductDto, ProductDto, UpdateProductDto } from "./product.types";


const index = async (req: Request, res: Response) => {
    try {
        const products: Product[] = await getAllProducts();
        res.status(StatusCodes.OK).json(products);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const product: CreateProductDto = req.body;
        if (!(await checkAlreadExists(product.name))) {
            const newProduct = await createProduct(product);
            res.status(StatusCodes.CREATED).json(newProduct);
        } else {
            res.status(StatusCodes.CONFLICT).json(ReasonPhrases.CONFLICT);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const read = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if ((await checkById(id))) {
            const product = await readProduct(id);
            res.status(StatusCodes.OK).json(product);
        } else {
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        }
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if ((await checkById(id))) {
            const product: ProductDto = req.body;
            const prodUpdated: UpdateProductDto = await updateProduct(id, product);
            res.status(StatusCodes.OK).json(prodUpdated);
        } else {
            res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND);
        }

    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error);
    }
};

const remove = async (req: Request, response: Response) => {
    try {
        const { id } = req.params;
        await deleteProduct(id);
        response.status(StatusCodes.NO_CONTENT).json();
    } catch (error) {
        response.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

export default {
    index,
    create,
    read,
    update,
    remove
}
