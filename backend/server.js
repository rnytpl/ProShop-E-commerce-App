import express from "express";
import { Product } from "./models/productModel.js";
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import { User } from "./models/userModel.js";
import productsRoutes from "./routes/productsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

const app = express();

app.use("/api/products", productsRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
