import express from "express"; const router = express.Router();
// import products from '../data/products.js';
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
import { getProducts, getProductById } from "../controllers/productController.js";

// router.get('/', asyncHandler(async (req, res) => {
//   const products = await Product.find({});
//   if (!products) throw new Error("Some error");
//   res.json(products);
// }));
router.route("/").get(getProducts);

// router.get('/:id', asyncHandler(async (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   const product = await Product.findById(req.params.id);
//   if(product) return res.json(product);
//   //res.status(404).json({ message: "Product not found" });
//   res.status(404); throw new Error("Resource not found");
// }));
router.route("/:id").get(getProductById);

export default router;
