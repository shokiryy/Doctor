import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { specialityData } from '../assets/assets_frontend/assets'

const Doctors = () => {
    
  const {speciality} = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()
  const applyFilter= () =>{
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else{
      setFilterDoc(doctors)
    }
  }

  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  return (
    <div>
        <p className='text-gray-600'>Doktorlar mutaxassislarini ko'rib chiqish</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
           <div className=' flex flex-col gap-4 text-sm text-gray-600'>
            <p onClick={()=> specialityData === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Umumiy amaliyot doktori</p>
            <p onClick={()=> specialityData === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gynecologist</p>
            <p onClick={()=> specialityData === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Dermatolog</p>
            <p onClick={()=> specialityData === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Pediatrlar</p>
            <p onClick={()=> specialityData === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Neurologist</p>
            <p onClick={()=> specialityData === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist`')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Gastroenterolog</p>
           </div>
           <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
            {
                 filterDoc.map((item,index)=>(
                  <div  onClick={()=>navigate(`/appointment/${item._id}`)} key={index}  className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'>
                  <img className='bg-blue-50' src={item.image} alt="" />
                  <div className='p-4'>
                      <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                          <p className='w-2 bg-green-500 rounded-full'></p><p>Mavjud</p>
                      </div>
                      <div>
                          <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                          <p className='text-gray-600 text-sm'>{item.speciality}</p>
                      </div>
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