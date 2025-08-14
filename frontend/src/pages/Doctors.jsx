/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import './Pages.css'

const Doctors = () => {

  const {speciality}  = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()
  

  const {doctors} = useContext(AppContext)
  
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors, speciality])

  return (
    <div>
      <p className='text-gray-600'>Duyệt qua các bác sĩ chuyên khoa.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev=> !prev)}>BỘ LỌC</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 animate-fade-slide-up-2 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={()=> speciality === 'Bác sĩ đa khoa'? navigate('/doctors') : navigate('/doctors/Bác sĩ đa khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ đa khoa" ? "bg-indigo-100 text-black" : ""}`}>Bác sĩ đa khoa</p>
          <p onClick={()=> speciality === 'bác sĩ phụ khoa'? navigate('/doctors') : navigate('/doctors/bác sĩ phụ khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "bác sĩ phụ khoa" ? "bg-indigo-100 text-black" : ""}`}>bác sĩ phụ khoa</p>
          <p onClick={()=> speciality === 'Bác sĩ da liễu'? navigate('/doctors') : navigate('/doctors/Bác sĩ da liễu')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ da liễu" ? "bg-indigo-100 text-black" : ""}`}>Bác sĩ da liễu</p>
          <p onClick={()=> speciality === 'Bác sĩ nhi khoa'? navigate('/doctors') : navigate('/doctors/Bác sĩ nhi khoa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ nhi khoa" ? "bg-indigo-100 text-black" : ""}`}>Bác sĩ nhi khoa</p>
          <p onClick={()=> speciality === 'Nhà thần kinh học'? navigate('/doctors') : navigate('/doctors/Nhà thần kinh học')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Nhà thần kinh học" ? "bg-indigo-100 text-black" : ""}`}>Nhà thần kinh học</p>
          <p onClick={()=> speciality === 'Bác sĩ tiêu hóa'? navigate('/doctors') : navigate('/doctors/Bác sĩ tiêu hóa')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-3 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Bác sĩ tiêu hóa" ? "bg-indigo-100 text-black" : ""}`}>Bác sĩ tiêu hóa</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6 animate-fade-slide-up'>
          {
            filterDoc.map((item,index)=>(
            // eslint-disable-next-line no-undef
            <div onClick={()=> navigate (`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={{index}}>
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Có Thể Chọn</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))
          }
        </div>
      </div>
    </div>
  )
}

export default Doctors
