import express from "express";
import { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment, cancelAppointment } from "../controllers/userController.js";
import authUser from "../middlewares/authUser.js";
import upload from "../middlewares/multer.js";

const userRoute = express.Router();

userRoute.post("/register", registerUser);
userRoute.post("/login", loginUser);

userRoute.get("/get-profile", authUser, getProfile);
userRoute.post("/update-profile",authUser, upload.single('image'),updateProfile);
userRoute.post("/book-appointment",authUser, bookAppointment);
userRoute.post("/cancel-appointment",authUser, cancelAppointment);
userRoute.get("/appointments",authUser, listAppointment);



export default userRoute;
