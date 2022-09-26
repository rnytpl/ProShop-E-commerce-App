import express from "express";
const router = express.Router();
import { authUser, registerUser, getProfile } from "../controllers/userControllers.js"
import { protect } from "../middleware/authMiddleware.js";

router.route("/")
    .post(registerUser)

router.route("/login")
    .post(authUser)
router.route("/profile")
    .get(protect, getProfile)

export default router