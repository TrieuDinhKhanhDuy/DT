import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getByIdProduct,
  updateProduct,
} from "../controllers/Products.js";
import { validBodyRequest } from "../middlewear/validBodyRequest.js";
import { productSchema } from "../Validations/Product.js";
import { checkAuth } from "../middlewear/checkAuth.js";
import { checkIsAdmin } from "../middlewear/checkIsAdmin.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getByIdProduct);

//admin
//middlewear này sẽ chạy trước
productRouter.use("/", checkAuth, checkIsAdmin);
productRouter.post("/", validBodyRequest(productSchema), createProduct);
productRouter.put("/:id", validBodyRequest(productSchema), updateProduct);
productRouter.delete("/:id", validBodyRequest(productSchema), deleteProduct);

export default productRouter;
