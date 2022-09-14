import express from "express";
import { Product } from "./models/productModel.js";
<<<<<<< HEAD
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import { User } from "./models/userModel.js";
import productsRoutes from "./routes/productsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
=======
import { Order } from "./models/orderModel.js";
import { User } from "./models/userModel.js"
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";

>>>>>>> 58e41b08847d9d9f744529cc458a207ccd8fc558
dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

const app = express();
<<<<<<< HEAD

app.use("/api/products", productsRoutes);

app.use(notFound);

app.use(errorHandler);
=======
app.get("/api/products", async (req, res) => {
  const products = await Product.find({})
  res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});
>>>>>>> 58e41b08847d9d9f744529cc458a207ccd8fc558

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
