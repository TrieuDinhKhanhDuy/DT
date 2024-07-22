import { Router } from "express";
import { login, register } from "../controllers/Auth.js";
import { validBodyRequest } from "../middlewear/validBodyRequest.js";
import { authSchema } from "../Validations/Auth.js";
export const authRouter = Router()
authRouter.post('/register',validBodyRequest(authSchema),register)
authRouter.post('/login',validBodyRequest(authSchema),login)