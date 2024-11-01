import { Router } from "express";
import productRouter from '../resources/product/product.router';
import userRouter from '../resources/user/user.router';
const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;