import { Request, Response } from "express";
import { CreateProductDto, ProductDto } from "./product.types";


const products: ProductDto[] = [
    { id: 1, name: 'Playstation 5', price: 5000 },
    { id: 2, name: 'Ventilador', price: 200 },
    { id: 3, name: 'Fiat Uno', price: 30000 },
    { id: 4, name: 'Geladeira', price: 1500 },
    { id: 5, name: 'Notebook Predator', price: 8000 },
    { id: 6, name: 'Bicicleta', price: 900 },
];

const index = (req: Request, res: Response) => {
    res.status(200).json(products);
};

const create = (req: Request, res: Response) => {
    const { name, price }: CreateProductDto = req.body;
    const newProd = {
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
        name,
        price
    };

    products.push(newProd);
    res.status(201).json(newProd);
};

const read = (req: Request, res: Response) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({
            message: "Produto não encontrado"
        });
    }
};

const update = (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, price }: ProductDto = req.body;

    const product = products.find(p => p.id === parseInt(id));

    if (product) {
        product.name = name || product.name
        product.price = price || product.price;
        res.status(200).json(product);
    } else {
        res.status(404).json({
            message: "Produto não encontrado"
        })
    }
};

const remove = (req: Request, res: Response) => {
    const { id } = req.params;

    const productIndex = products.findIndex(p => p.id === parseInt(id));

    if (productIndex > -1) {
        const removedProd = products.splice(productIndex, 1);
        res.status(200).json(removedProd[0]);
    } else {
        res.status(404).json({
            message: "Produto não encontrado"
        })
    }
};

export default {
    index,
    create,
    read,
    update,
    remove
}
