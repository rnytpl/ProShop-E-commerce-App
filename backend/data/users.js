import bcrypt from "bcryptjs";

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
