import mongoose from "mongoose";
import { dbConnect } from "./db/db.js";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import { User } from "./models/userModel.js";
import { Product } from "./models/productModel.js";
import { Order } from "./models/orderModel.js";

dotenv.config();
dbConnect();

const importData = async () => {
  try {
    // Cleaning all data in all 3 documents below in database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // We're seeding all user objects into our user model in database
    const createdUsers = await User.insertMany(users);
    // Admin's id is required to give admin access to each product, so we obtain it like so;
    const adminUser = createdUsers[0]._id;
    // We take each product then spread its fields
    // Also user field is added and admin id is assigned which is fetched in the above code
    // Then its returned as an array of objects and stored in a variable
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    // After products are prepared, now its ready to be seeded into Product model
    await Product.insertMany(sampleProducts);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
  }
};

const destroyData = async () => {
  try {
    // Cleaning all data in all 3 documents below in database
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}