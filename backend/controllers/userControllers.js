import asyncHandler from "express-async-handler";
import { User } from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";
import bcrypt from "bcryptjs"

// @desc Auth user & get token
// @route POST api/users/login
// @access PUBLIC

export const authUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    const newUser = await User.findOne({ email })
    if (findUser && (await findUser.matchPassword(password))) {
        res.json({
            _id: findUser._id,
            name: findUser.name,
            email: findUser.email,
            isAdmin: findUser.isAdmin,
            token: generateToken(findUser._id),
        })
    } else {
        res.status(401)
        throw new Error("Invalid email or password")
    }
});

// @desc Register user
// @route POST api/users
// @access PUBLIC

export const registerUser = asyncHandler(async (req, res, next) => {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ email })
    if (existingUser) {
        res.status(400)
        throw new Error("User already exists")
    }

    const newUser = await User.create({
        name,
        email,
        password
    })

    if (newUser) {
        res.status(200).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id),
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
});

// @desc 
// @route Get api/users/profile
// @access PRIVATE

export const getProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error("User not found")
    }
}