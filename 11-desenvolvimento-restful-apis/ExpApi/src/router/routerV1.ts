import { Router } from "express";
import productRouter from '../resources/product/product.router';
import userRouter from '../resources/user/user.router';
import authRouter from '../resources/auth/auth.router';

const router = Router();

router.use(
  "/auth",
  // #swagger.tags = ['Auth']
  authRouter
 );
 router.use(
  "/produto",
  // #swagger.tags = ['Produto']
  productRouter
 );
 router.use(
  "/usuario",
  // #swagger.tags = ['Usuario']
  userRouter
 );


export default router;