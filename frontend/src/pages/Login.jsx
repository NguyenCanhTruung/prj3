import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Đăng ký')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</p>
        <p>Vui lòng <span className='font-bold'>{state === 'Đăng ký' ? "đăng ký" : "đăng nhập"}</span> để đặt lịch hẹn</p>
        {
          state === "Đăng ký" && <div className='w-full '>
            <p>Họ và Tên</p>
            <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.name)} value={name} required />
          </div>
        }

        <div className='w-full '>
          <p>Email</p>
          <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="email" onChange={(e) => setEmail(e.target.name)} value={email} required />
        </div>
        <div className='w-full '>
          <p>Password</p>
          <input className='border border-zinc-300 rounded-full w-full p-2 mt-1' type="password" onChange={(e) => setPassword(e.target.name)} value={password} required />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-full text-base'>{state === 'Đăng ký' ? "Tạo tài khoản" : "Đăng nhập"}</button>
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
