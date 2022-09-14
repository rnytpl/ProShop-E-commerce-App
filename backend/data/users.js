import bcrypt from "bcryptjs";

<<<<<<< HEAD
const users = [
  {
    name: "Admin User",
    password: bcrypt.hashSync("123456", 10),
    email: "admin@gmail.com",
    isAdmin: true,
  },
  {
    name: "Jane Doe",
    password: bcrypt.hashSync("123456", 10),
    email: "janedoe@gmail.com",
    isAdmin: false,
  },
  {
    name: "John Doe",
    password: bcrypt.hashSync("123456", 10),
    email: "johndoe@gmail.com",
    isAdmin: false,
  },
  {
    name: "Ronay",
    password: bcrypt.hashSync("123456", 10),
    email: "rnytpl@gmail.com",
    isAdmin: false,
  },
];

export default users;
=======
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

>>>>>>> 58e41b08847d9d9f744529cc458a207ccd8fc558
