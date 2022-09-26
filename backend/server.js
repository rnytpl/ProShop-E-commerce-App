import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js";
import productsRoutes from "./routes/productsRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js"
dotenv.config();
const PORT = process.env.PORT || 5000;
dbConnect();

// Parse incoming json object requests

const app = express();
app.use(express.json())

app.use("/api/products", productsRoutes);
app.use("/api/users", userRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(
  PORT,
  console.log(`Server is running in ${process.env.NODE_ENV} on ${PORT}`)
);
