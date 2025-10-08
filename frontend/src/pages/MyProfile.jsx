import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

const MyProfile = () => {

  const {userData, setUserData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)

  return userData &&  (
    <div className='min-h-screen flex items-center justify-start sm:justify-center'>
      <div className='w-full sm:w-2/5 flex flex-col gap-2 text-sm '>

        <img className='w-36 rounded' src={userData.image} alt="" />

        {
          isEdit
            ? <input className='bg-gray-100 text-3xl font-medium max-w-96 mt-4 ' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
            : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
        }

        <hr className='bg-zinc-400 h-[1px] border-none ' />
        <div>
          <p className='text-neutral-500 mt-3 text-base'>THÔNG TIN LIÊN HỆ</p>
          <div className='grid grid-cols-[0.8fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Email Id:</p>
            <p className='text-blue-500'>{userData.email}</p>
            <p className='font-medium'>Phone:</p>
            {
              isEdit
                ? <input className='bg-gray-100 max-w-40' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                : <p className='text-blue-400'>{userData.phone}</p>
            }
            <p className='font-medium'>Địa chỉ:</p>
            {
              isEdit
                ? <p>
                  <input className='bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                  <br />
                  <input className='bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                </p>
                : <p className='text-gray-500'>
                  {userData.address.line1}
                  <br />
                  {userData.address.line2}
                </p>
            }
          </div>
        </div>
        <div>
          <p className='text-neutral-500 mt-3 text-base'>THÔNG TIN CƠ BẢN</p>
          <div className='grid grid-cols-[0.8fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
            <p className='font-medium'>Giới tính:</p>
            {
              isEdit
                ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                </select>
                : <p className='text-gray-500'>{userData.gender}</p>
            }
            <p className='font-medium'>Ngày sinh:</p>
            {
              isEdit
                ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                : <p className='text-gray-500'>{userData.dob}</p>
            }
          </div>
        </div>

        <div className='mt-10'>
          {
            isEdit
              ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Lưu thông tin</button>
              : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Chỉnh sửa</button>
          }
        </div>

      </div>
    </div>

  )
}

export default MyProfile
