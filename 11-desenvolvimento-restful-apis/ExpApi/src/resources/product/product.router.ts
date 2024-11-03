import { Router } from "express";
import productController from "./product.controller";
import validate from "../../middlewares/validate";
import productSchema from "./product.schema";
import isAdmin from "../../middlewares/isAdmin";

const router = Router();

router.get('/', productController.index);

router.post('/', isAdmin, validate(productSchema), productController.create);

router.get('/:id', productController.read);

router.put('/:id', isAdmin, validate(productSchema), productController.update);

router.delete('/:id', isAdmin, productController.remove);

export default router;