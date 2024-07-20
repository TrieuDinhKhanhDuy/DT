import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getByIdProduct, updateProduct } from "../controllers/Products.js";
import { validBodyRequest } from "../middlewear/validBodyRequest.js";
import { productSchema } from "../Validations/Product.js";

const productRouter = Router()

productRouter.get("/",getAllProducts)
productRouter.get("/:id",getByIdProduct)

//admin
productRouter.post("/",validBodyRequest(productSchema),createProduct)
productRouter.put("/:id",validBodyRequest(productSchema),updateProduct)
productRouter.delete("/:id",validBodyRequest(productSchema),deleteProduct)

export default  productRouter   