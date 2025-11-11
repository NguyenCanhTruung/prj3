import express from "express";
import { createPaymentUrl, verifyPayment } from "../controllers/paymentController.js";
import authUser from "../middlewares/authUser.js";

const paymentRoute = express.Router();

// FE gọi tạo thanh toán
paymentRoute.post("/create", authUser, createPaymentUrl);

// FE gọi để xác nhận sau khi nhận callback
paymentRoute.get("/verify", verifyPayment);

export default paymentRoute;
