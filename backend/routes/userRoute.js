import express from "express";
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

userRoute.get("/get-profile", authUser, getProfile);
userRoute.post("/update-profile",authUser, upload.single('image'),updateProfile);
userRoute.post("/book-appointment",authUser, bookAppointment);



export default userRoute;
