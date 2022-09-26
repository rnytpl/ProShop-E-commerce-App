import { User } from "../models/userModel.js"
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

export const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        (req.headers.authorization.startsWith("Bearer"))
    ) {

        try {
            // We describe that split should occur where there is an empty space
            // Then we select the second item in the array which gives us the token
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select("-password")
            next()
        } catch (error) {
            !token && res.status(401)
            throw new Error("Not authorized, token failed")
        }
    }
}
)