import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg pl-4 pr-0 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0
'>
      {/* --------------left Side------------ */}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight md:leading-tight lg:leading-tight text-white'>
          Đặt lịch hẹn <br /> Với các bác sĩ đáng tin cậy
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
          <img className='w-32' src={assets.group_profile2} alt="" />
          <p className='text-base'>
            Chỉ cần duyệt qua danh sách dài các bác sĩ đáng tin cậy của chúng tôi,
            lên lịch hẹn khám mà không gặp rắc rối</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transion-all duration-300'>
          Đặt lịch hẹn <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>
      {/* --------------right Side------------ */}
      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
