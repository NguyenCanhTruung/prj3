import { VNPay } from "vnpay";
import appointmentModel from "../models/appointmentModel.js";

const vnpay = new VNPay({
  tmnCode: process.env.VNP_TMNCODE,
  secureSecret: process.env.VNP_SECRET,
  testMode: true,
});

// Bước khởi tạo thanh toán
export const createPaymentUrl = async (req, res) => {
  try {
    // Nhận appointmentId để liên kết với lịch hẹn
    const { appointmentId, orderInfo } = req.body;
    // Tìm lịch hẹn có tồn tại không
    const appointment = await appointmentModel.findById(appointmentId);
    if (!appointment) return res.json({ success: false, message: "Không tìm thấy lịch hẹn" });
    // Lưu txnRef vào lịch hẹn để đối chiếu
    const txnRef = `ORDER_${appointmentId}_${Date.now()}`;
    appointment.txnRef = txnRef;
    await appointment.save();
    // Số tiền nhân 100 theo chuẩn VNPay (giả sử field fees hoặc amount là số tiền VND thực tế)
    const vnpAmount = appointment.amount * 1000;
    const paymentUrl = vnpay.buildPaymentUrl({
      vnp_Amount: vnpAmount,
      vnp_IpAddr: req.ip,
      vnp_TxnRef: txnRef,
      vnp_OrderInfo: orderInfo,
      vnp_ReturnUrl: `${process.env.FRONTEND_URL}/vnpay-callback`, // FE sẽ nhận và xử lý
    });
    return res.json({ success: true, paymentUrl });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// VNPay redirect FE về URL này (ví dụ: /vnpay-callback). FE đọc query, gửi verify về BE kiểm tra lại, trả kết quả cuối cùng và cập nhật DB
export const verifyPayment = async (req, res) => {
  try {
    const result = vnpay.verifyReturnUrl(req.query);
    if (!result.isSuccess || req.query.vnp_ResponseCode !== '00') {
      return res.json({ success: false, message: "Thanh toán thất bại hoặc bị huỷ" });
    }
    // Xác định lịch hẹn qua txnRef
    const appointment = await appointmentModel.findOne({ txnRef: req.query.vnp_TxnRef });
    if (!appointment) return res.json({ success: false, message: "Không tìm thấy lịch hẹn để ghi nhận trả phí" });
    if (!appointment.paid) {
      appointment.paid = true;
      await appointment.save();
    }
    res.json({ success: true, message: "Thanh toán thành công!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
