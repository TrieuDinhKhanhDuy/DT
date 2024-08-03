import { Router } from "express";
import { login, register } from "../controllers/Auth.js";
import { validBodyRequest } from "../middlewear/validBodyRequest.js";
import { authSchema } from "../Validations/Auth.js";
import { showProfile } from "../controllers/User.js";
import { checkAuth } from "../middlewear/checkAuth.js";
export const authRouter = Router()
authRouter.post('/register',validBodyRequest(authSchema),register)
authRouter.post('/login',validBodyRequest(authSchema),login)

authRouter.use("/",checkAuth)
authRouter.get("/me",showProfile)
// authRouter.patch("/me",showProfile)