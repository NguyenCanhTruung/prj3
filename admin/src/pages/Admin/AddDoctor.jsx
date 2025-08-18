import React from 'react'
import { assets } from '../../assets/assets'

const AddDoctor = () => {
  return (
    <form className='m-5 w-full'>

      <p className='mb-3 text-lg font-medium'>Thêm Bác Sĩ</p>

      <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll '>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="doc-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={assets.upload_area} alt="" />
          </label>
          <input type="file" id='doc-img' hidden />
          <p>Tải ảnh lên</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-600'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Họ và Tên</p>
              <input className='border rounded px-3 py-2' type="text" placeholder='Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Email</p>
              <input className='border rounded px-3 py-2' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Mật khẩu</p>
              <input className='border rounded px-3 py-2' type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Kinh nghiệm</p>
              <select className='border rounded px-3 py-2' name="" id="">
                <option value="1 năm">1 Năm</option>
                <option value="2 năm">2 Năm</option>
                <option value="3 năm">3 Năm</option>
                <option value="4 năm">4 Năm</option>
                <option value="5 năm">5 Năm</option>
                <option value="6 năm">6 Năm</option>
                <option value="7 năm">7 Năm</option>
                <option value="8 năm">8 Năm</option>
                <option value="9 năm">9 Năm</option>
                <option value="10 năm">10 Năm</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Phí hẹn gặp</p>
              <input className='border rounded px-3 py-2' type="number" placeholder='Fees' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Chuyên Ngành</p>
              <select className='border rounded px-3 py-2' name="" id="">
                <option value="Bác sĩ đa khoa">Bác sĩ đa khoa</option>
                <option value="bác sĩ phụ khoa">bác sĩ phụ khoa</option>
                <option value="Bác sĩ da liễu">Bác sĩ da liễu</option>
                <option value="Bác sĩ nhi khoa">Bác sĩ nhi khoa</option>
                <option value="Nhà thần kinh học">Nhà thần kinh học</option>
                <option value="Bác sĩ tiêu hóa">Bác sĩ tiêu hóa</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Học vấn</p>
              <input className='border rounded px-3 py-2' type="text" placeholder='Học vấn' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Địa chỉ</p>
              <input className='border rounded px-3 py-2' type="text" placeholder='address 1' required />
              <input className='border rounded px-3 py-2' type="text" placeholder='address 2' required />
            </div>

          </div>
        </div>

        <div>
          <p className='mt-4 mb-2'>Giới thiệu</p>
          <textarea className='w-full px-4 border rounded pt-2' type="text" placeholder='Viết về bác sĩ' rows={5} required />
        </div>

        <button className='bg-primary px-10 py-3 mt-4 text-white rounded-full'>Thêm bác sĩ</button>

      </div>

    </form>
  )
}

export default AddDoctor
