import { Product } from "./models/productModel.js";
import products from "./data/products.js";
import { Order } from "./models/orderModel.js";
import { User } from "./models/userModel.js"
import { users } from "./data/users.js"
import dotenv from "dotenv";
import { dbConnect } from "./db/db.js"

dotenv.config();
dbConnect()

export const importData = async () => {

    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        //
        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map(product => {
            return { ...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts);

        console.log("Data imported!")
        process.exit()
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}


export const destroyData = async () => {
    try {
        await Product.deleteMany();
        await Order.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!")
        process.exit()
    } catch (error) {

        console.error(error)
        process.exit(1)
    }
}

if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}