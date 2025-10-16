import validator from "validator";
import bycrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import {v2 as cloudinary} from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import appointmentModel from "../models/appointmentModel.js";




// api  too register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      return res.json({ success: false, message: "Thiếu chi tiết" });
    }

    //validating email format
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Nhập email hợp lệ" });
    }

    //validating strong pass
    if (password.length < 8) {
      return res.json({ success: false, message: "Nhập mật khẩu mạnh" });
    }

    // hasshing password
    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//api for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "Người dùng không tồn tại" });
    }

    const isMatch = await bycrypt.compare(password, user.password);

    if (isMatch) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Thông tin không hợp lệ" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api to get user profile data
const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await userModel.findById(userId).select('-password');

    res.json({ success: true, userData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api to update user profile
const updateProfile = async (req, res) => {
  try {
    const userId = req.userId || req.body.userId;
    const { name, phone, address, dob, gender } = req.body;
    const imageFile = req.file;

    if (!name || !phone || !dob || !gender) {
      return res.json({ success: false, message: "Thiếu chi tiết" });
    }

    await userModel.findByIdAndUpdate(userId, {
      name,
      phone,
      address: JSON.parse(address),
      dob,
      gender,
    });

    if (imageFile) {
      
      //upload image to cloudinary
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: "image"});
      const imageURL = imageUpload.secure_url;

      await userModel.findByIdAndUpdate(userId, {image: imageURL});

    }

    res.json({ success: true, message: "Cập nhật hồ sơ thành công" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// api to book appointment
const bookAppointment = async (req, res) => {

  try {

    const {userId, docId, slotDate, slotTime} = req.body;

    const docData = await doctorModel.findById(docId).select('-password')

    if (!docData.available) {
      return res.json({success:false, message:"Bác sĩ hiện không có sẵn"})
    }
    
    let slots_booked = docData.slots_booked

    // check slot availability
    if (slots_booked[slotDate]) {
      if (slots_booked[slotDate].includes(slotTime)) {
        return res.json({success:false, message:"Khung giờ không khả dụng, vui lòng chọn khung giờ khác"})
      } else {
        slots_booked[slotDate].push(slotTime)
      }
    } else {
      slots_booked[slotDate] = [slotTime]
      slots_booked[slotDate].push(slotTime)
    }

    const userData = await userModel.findById(userId).select('-password')

    delete docData.slots_booked

    const appointmentData = {
      userId,
      docId,
      userData,
      docData,
      amount: docData.fees,
      slotTime,
      slotDate,
      date: Date.now()
    }

    const newAppointment = new appointmentModel(appointmentData);
    await newAppointment.save();

    // save new slot data in docData
    await doctorModel.findByIdAndUpdate(docId, {slots_booked})

    res.json({success:true, message:"Đặt lịch hẹn thành công"})

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
}

//api to get user appointments for frontend my-appointment page
const listAppointment = async(req, res) =>{

  try {

    const userId = req.userId;
    const appointments = await appointmentModel.find({userId})

    res.json({success:true, appointments})
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

//api to cancel appointment
const cancelAppointment = async(req, res) =>{

  try {

    const {userId, appointmentId} = req.body;

    const appointmentData = await appointmentModel.findById(appointmentId)

    // verify appointment belongs to user
    if (appointmentData.userId !== userId) {
      return res.json({success:false, message:"Bạn không có quyền hủy cuộc hẹn này"})
    }

    await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled: true})
    
    
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }

}

export { registerUser, loginUser, getProfile, updateProfile, bookAppointment, listAppointment };
