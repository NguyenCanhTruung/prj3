import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Login = () => {

  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [state, setState] = useState('Đăng ký')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Đăng ký') {

        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {

        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
      toast.error(error.message)
    }

  }

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</p>
        <p>Vui lòng <span className='font-bold'>{state === 'Đăng ký' ? "đăng ký" : "đăng nhập"}</span> để đặt lịch hẹn</p>
        {
          state === "Đăng ký" && <div className='w-full '>
            <p>Họ và Tên</p>
            <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} required />
          </div>
        }

        <div className='w-full '>
          <p>Email</p>
          <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
        </div>
        <button type='submit' className='bg-primary text-white w-full py-2 rounded-full text-base'>{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</button>
        {
          state === 'Đăng ký'
            ? <p>Bạn đã có tài khoản rồi? Đăng nhập <span onClick={() => setState('Đăng nhập')} className='text-primary underline cursor-pointer'>tại đây</span> </p>
            : <p>Tạo tài khoản mới? <span onClick={() => setState('Đăng ký')} className='text-primary underline cursor-pointer'>Tại đây</span></p>
        }
      </div>
    </form>
  )
}

export default Login
