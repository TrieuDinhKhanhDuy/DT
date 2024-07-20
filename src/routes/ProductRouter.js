import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getByIdProduct, updateProduct } from "../controllers/Products.js";

const productRouter = Router()

productRouter.post("/",createProduct)
productRouter.get("/",getAllProducts)
productRouter.get("/:id",getByIdProduct)
productRouter.put("/:id",updateProduct)
productRouter.delete("/:id",deleteProduct)

export default  productRouter   