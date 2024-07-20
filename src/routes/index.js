import { Router } from "express";
import productRouter from "./ProductRouter.js";
const router=Router();
router.use("/products",productRouter)
export default router