import { Product } from "@prisma/client";
import { Request, Response } from "express";
import { checkAlreadExists, checkById, createProduct, deleteProduct, getAllProducts, readProduct, updateProduct } from "./product.service";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { CreateProductDto, ProductDto, UpdateProductDto } from "./product.types";


const index = async (req: Request, res: Response) => {
    /*
     #swagger.summary = 'Retorna todos os produtos cadastrados na base.'
     #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Product'}
     }
    * */
    try {
        const products: Product[] = await getAllProducts();
        res.status(StatusCodes.OK).json(products);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ReasonPhrases.INTERNAL_SERVER_ERROR);
    }
};

const create = async (req: Request, res: Response) => {
    /*
        #swagger.summary = 'Adiciona um novo produto na base.'
        #swagger.parameters['body'] = {
            in: 'body',
            schema: { $ref: '#/definitions/CreateProductDto' }
        }
        #swagger.responses[200] = {
        schema: { $ref: '#/definitions/Product' }
        }
    */
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
    /*
        #swagger.summary = 'Recupera dados de um produto específico.'
        #swagger.parameters['id'] = { description: 'ID do produto' }
        #swagger.responses[200] = {
            schema: { $ref: '#/definitions/Product' }
        }
    */
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
    /*
    #swagger.summary = 'Atualiza os dados de um produto específico.'
    #swagger.parameters['id'] = { description: 'ID do produto a ser atualizado', required: true }
    #swagger.parameters['body'] = {
        in: 'body',
        schema: { $ref: '#/definitions/UpdateProductDto' }
    }
    #swagger.responses[200] = {
        description: 'Produto atualizado com sucesso.',
        schema: { $ref: '#/definitions/UpdateProductDto' }
    }
    #swagger.responses[404] = {
        description: 'Produto não encontrado.'
    }
    */
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
    /*
    #swagger.summary = 'Remove um produto específico da base de dados.'
    #swagger.parameters['id'] = { description: 'ID do produto a ser removido', required: true }
    #swagger.responses[204] = {
        description: 'Produto removido com sucesso (sem conteúdo).'
    }
    #swagger.responses[404] = {
        description: 'Produto não encontrado.'
    }
    */
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
