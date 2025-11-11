import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    docId: { type: String, required: true },
    slotDate: { type: String, required: true },
    slotTime: { type: String, required: true },
    userData: { type: Object, required: true },
    docData: { type: Object, required: true },
    amount: { type: Number, required: true }, // Số tiền VND
    date: { type: Number, required: true },
    cancelled: { type: Boolean, default: false },
    paid: { type: Boolean, default: false },  // Trạng thái đã thanh toán
    txnRef: { type: String },                // Mã giao dịch trả về từ VNPay
    isCompleted: { type: Boolean, default: false }
});

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment', appointmentSchema);
export default appointmentModel;
