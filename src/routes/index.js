import { Router } from "express";
import productRouter from "./ProductRouter.js";
import { authRouter } from "./authRouter.js";
const router=Router();
router.use("/products",productRouter)
router.use("/auth" , authRouter)
export default router