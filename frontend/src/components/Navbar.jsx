import React, { useState } from 'react'
import {assets} from '../assets/assets.js' 
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu]= useState(false);
  const [token,setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-2 mb-5 border-b border-b-gray-300'>
      <img onClick={()=> navigate('/')} className='w-32 cursor-pointer' src={assets.logo2} alt="" />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>TRANG CHỦ</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>BÁC SĨ</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='about'>
            <li className='py-1'>GIỚI THIỆU</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to='contact'>
            <li className='py-1'>LIÊN HỆ</li>
            <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token
          ?<div className='flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-12 rounded-full ' src={assets.profile_pic} alt="" />
            <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>Hồ sơ cá nhân</p>
                <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>Lịch hẹn cá nhân</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Đăng xuất</p>
              </div>
            </div>
          </div>
          :<button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Tạo tài khoản</button>
        }    
        <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />    
        {/* ----------mobile menu----------- */}
        <div className={`${showMenu ? 'fixed w-full' : 'w-0 h-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-24' src={assets.logo2} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div >
          <ul className='flex flex-col items-center gap-2 mt-5 mx-5 text-lg font-medium'>
            <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>TRANG CHỦ</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-4 py-2 rounded inline-block'>BÁC SĨ</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>GIỚI THIỆU</p></NavLink>
            <NavLink  onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>LIÊN HỆ</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
