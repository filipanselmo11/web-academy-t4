import { Router } from "express";
import mainController from "../controllers/mainController";
import produtoController from "../controllers/produtoController";


const router = Router();

router.get('/', mainController.index);

router.get('/info', mainController.info);

router.get('/sobre', mainController.sobre);

router.get('/lorem/:paragraphs', mainController.lorem);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

//Prod Controller

router.get('/produtos', produtoController.index);

router.all('/produtos/create', produtoController.create);

router.get('/produtos/:id', produtoController.read);

router.get('/produtos/:id/edit', produtoController.renderEditForm);

router.post('/produtos/:id', produtoController.update);

router.delete('/produtos/:id/delete', produtoController.remove);

export default router;