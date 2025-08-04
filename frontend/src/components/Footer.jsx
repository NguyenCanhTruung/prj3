import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='felx flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ----------------left--------------- */}
        <div>
            <img className='mb-5 w-40' src={assets.logo2} alt="" />
            <p className='w-full md:w-4/5 text-gray-600 leading-6'>Website đặt lịch khám bệnh trực tuyến giúp bệnh nhân dễ dàng tìm kiếm, lựa chọn bác sĩ phù hợp và đặt lịch hẹn chỉ với vài thao tác. Hệ thống hỗ trợ quản lý lịch khám, nhắc lịch tự động, lưu trữ hồ sơ y tế an toàn và bảo mật, mang đến trải nghiệm khám chữa bệnh nhanh chóng, tiện lợi và hiệu quả.</p>
        </div>

        {/* ----------------center--------------- */}
        <div>
            <p className='text-xl font-medium mb-5'>CÔNG TY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Trang chủ</li>
                <li>Về chúng tôi</li>
                <li>Liên hệ</li>
                <li>Thông tin pháp lý</li>
            </ul>
        </div>

        {/* ----------------right--------------- */}
        <div>
            <p className='text-xl font-medium mb-5'>THÔNG TIN LIÊN HỆ</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+84 862-317-600</li>
                <li>nguyentrung29042004@gmail.com</li>
            </ul>
        </div>
      </div>
      {/* ------------copyright text------------- */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright © 2025 NGUYEN_CANH_TRUNG - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
