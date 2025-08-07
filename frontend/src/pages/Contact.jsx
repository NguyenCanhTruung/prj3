import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {



  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>LIÊN HỆ <span className='text-gray-700 font-semibold'>CHÚNG TÔI</span> </p>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start'>
          <p className='font-semibold text-lg text-gray-600'>CÔNG TY CHÚNG TÔI</p>
          <p className='text-gray-500'>322E Lê Trọng Tấn, Phương Liệt, Hà Nội</p>
          <p className='text-gray-500'>Tel: +84 862-317-600 <br />Email: nguyentrung29042004@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Công việc tại CÔNG TY</p>
          <p className='text-gray-500'>Tìm hiểu thêm về các nhóm và vị trí tuyển dụng của chúng tôi</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-300'>Khám phá việc làm</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
