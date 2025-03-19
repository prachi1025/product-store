import express from "express"
import { getProducts, createProduct, updateProduct, deleteProduct } from "../controllers/products.controller.js"

const productRoutes = express.Router()

productRoutes.get("/", getProducts)

productRoutes.post("/", createProduct)

productRoutes.put("/:id", updateProduct)

productRoutes.delete("/:id", deleteProduct)

export default productRoutes