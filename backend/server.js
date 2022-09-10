import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import { User } from "./models/users.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

const app = express();
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
