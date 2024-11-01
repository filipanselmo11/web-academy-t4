import { Router } from "express";
import userController from "./user.controller";
import validate from "../../middlewares/validate";
import userSchema from "./user.schema";


const router = Router();

router.get('/', userController.index);

router.post('/', validate(userSchema), userController.create);

router.get('/:id', userController.read);

router.put('/:id', validate(userSchema), userController.update);

router.delete('/:id', userController.remove);

export default router;