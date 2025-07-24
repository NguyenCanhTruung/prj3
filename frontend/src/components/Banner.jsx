import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()
    // This component renders a banner with a title, subtitle, and an image.
  return (
    <div className='flex bg-primary rounded-xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
      {/* -----left side----- */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4'>
            <p>Đặt lịch hẹn</p>
            <p className='mt-4'>Với 100+ Bác Sĩ uy tín</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all'>Tạo tài khoản</button>
      </div>

      {/* -----right side----- */}
      <div className='hidden md:block md:w-1/2 lg:w-[380px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner
