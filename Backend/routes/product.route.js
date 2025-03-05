import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

//All came from product.controller.js => routes here.
router.get("/",getProducts);

router.post("/", createProduct);

router.put("/:id",updateProduct);

router.delete("/:id", deleteProduct);

export default router;