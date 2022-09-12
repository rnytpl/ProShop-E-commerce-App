import express from "express";
import { Product } from "./models/productModel.js";
import { Order } from "./models/orderModel.js";
import { User } from "./models/userModel.js"
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

const app = express();
app.get("/api/products", async (req, res) => {
  const products = await Product.find({})
  res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
