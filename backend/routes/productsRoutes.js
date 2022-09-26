import express from "express";
const router = express.Router();

import { getProduct, getProducts } from "../controllers/productControllers.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProduct);

export default router;
