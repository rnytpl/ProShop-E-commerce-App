import bcrypt from "bcryptjs";

export const users = [
    {
        name: "Admin",
        password: bcrypt.hashSync("123456", 10),
        email: "admin@gmail.com",
        isAdmin: true
    },
    {
        name: "Jane Doe",
        password: bcrypt.hashSync("123456", 10),
        email: "janedoe@gmail.com",

    },
    {
        name: "John Doe",
        password: bcrypt.hashSync("123456", 10),
        email: "johndoe@gmail.com",

    },
    {
        name: "Ronay Topal",
        password: bcrypt.hashSync("123456", 10),
        email: "rnytpl@gmail.com",

    },
]

