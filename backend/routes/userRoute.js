import express from "express";
import { registerUser, loginUser, getProfile } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

userRoute.get("/get-profile", authUser, getProfile);




export default userRoute;
