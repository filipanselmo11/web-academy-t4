import axios from "axios";
import { Request, Response } from "express";
import { CreateProdutoDto, Produto, UpdateProdutoDto } from "../types/produto";


// const baseUrl = process.env.DB_SERVER;

const index = async (req: Request, res: Response) => {
    try {
        const { data: produtos } = await axios.get<Produto[]>(`${process.env.DB_SERVER}/produtos`);
        console.log(produtos);
        res.render("produtos/index", { produtos });
    } catch (error) {
        res.status(500).json(error);
    }
};

const create = async (req: Request, res: Response) => {
    if (req.method === 'GET') {
        res.render("produtos/create");
    } else if (req.method === 'POST') {
        const produto: CreateProdutoDto = req.body;
        try {
            await axios.post(`${process.env.DB_SERVER}/produtos`, produto);
            res.redirect('/produtos');
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

const read = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const { data: produto } = await axios.get<Produto>(`${process.env.DB_SERVER}/produtos/${id}`);
        res.render("produtos/view", produto);
    } catch (error) {
        res.status(500).json(error);
    }
};

const renderEditForm = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const { data: produto } = await axios.get<Produto>(`${process.env.DB_SERVER}/produtos/${id}`);
        res.render("produtos/edit", produto);
    } catch (error) {
        res.status(500).json(error);
    }
};

const update = async (req: Request, res: Response) => {
    const id = req.params.id;
    const produtoAtualizado: UpdateProdutoDto = req.body;

    try {
        await axios.post(`${process.env.DB_SERVER}/produtos/${id}`, produtoAtualizado);
        res.redirect("/produtos");
    } catch (error) {
        res.status(500).json(error);
    }
};

const remove = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await axios.delete(`${process.env.DB_SERVER}/produtos/${id}`);
        res.redirect("/produtos");
    } catch (error) {
        res.status(500).json(error);
    }
};

export default {
    index,
    create,
    read,
    renderEditForm,
    update,
    remove
}