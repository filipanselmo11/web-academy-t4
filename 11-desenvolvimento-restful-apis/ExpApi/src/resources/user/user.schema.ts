import Joi from "joi";
import { UserTypes } from "../userType/userType.constants";

const userSchema = Joi.object().keys({
    name: Joi.string().min(3).max(40),
    email: Joi.string().email(),
    password: Joi.string().min(3).max(40),
    userTypeId: Joi.string().valid(UserTypes.admin, UserTypes.client)
});

export default userSchema;