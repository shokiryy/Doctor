import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {

  return (
   <div>
     <div className='text-center text-2xl pt-10 text-gray-500'>
         <p>Biz bilan <span className='text-gray-700 font-semibold'>bog'laning</span></p>
    </div>
     

     <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
      <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

      <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Bizning Ofisim iz</p>
          <p className='text-gray-500'>gulsanam kochasi<br /> munavar qori mahalasi</p>
          <p className='text-gray-500'>Tel: (998) 97-199-30-07 <br /> Email: shokirjon123@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Karyera imkoniyatlari PRESCRIPTO’da</p>
          <p className='text-gray-500'>Bizning Jamoalarimiz va Ish O'rinlari Haqida Batafsil Ma'lumot</p>
          <button className='border border-black px-8 p-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Ish O'rinlari Bilan Tanishing</button>
       </div>

     </div>
   </div>
    
  )
}

export default Contact