import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT<span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Prescripto-ga xush kelibsiz, sog'liqni saqlash ehtiyojlaringizni qulay va samarali tarzda boshqarish bo'yicha ishonchli hamkoringiz. Prescripto-da biz odamlar uchun doktor qabuliga yozilish va sog'liqni saqlash ma'lumotlarini boshqarishdagi qiyinchiliklarni tushunamiz</p>
          <p>Prescripto sog'liqni saqlash texnologiyalarida mukammallikka sodiqdir. Biz doimo platformamizni takomillashtirishga intilamiz, foydalanuvchi tajribasini yaxshilash va yuqori sifatli xizmatlarni taqdim etish uchun eng so'nggi yutuqlarni integratsiya qilamiz. Birinchi uchrashuvni rejalashtirayotgan bo'lsangiz yoki davomiy davolanishni boshqarayotgan bo'lsangiz, Prescripto har bir qadamingizda sizni qo'llab-quvvatlash uchun shu yerdir.</p>
          <b className='text-gray-800'>Bizning Vizyonimiz</b>
          <p>Prescripto-dagi bizning vizyonimiz har bir foydalanuvchi uchun sog'liqni saqlash tajribasini uzviy va qulay qilishdir. Biz bemorlar va sog'liqni saqlash ta'minotchilari o'rtasidagi tafovutni bartaraf etishni maqsad qilganmiz, shunda sizga zarur bo'lgan yordamni kerakli vaqtda olishni osonlashtiramiz.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>Nima<span className='text-gray-700 font-semibold'>uchun bizni tanlashingiz kerak?</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Samaradorlik</b>
          <p>Ishonchli Sog'liqni Saqlash Mutaxassislarining Tarmog'iga Kirish</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Qulaylik</b>
          <p>Sog'lig'ingizni Nazoratda Tutish Uchun Moslashtirilgan Tavsiyalar va Eslatmalar</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Shaxsiy Yondashuv</b>
          <p>Yashash Joyingizdagi Ishonchli Sog'liqni Saqlash Mutaxassislarining Tarmog'iga Kirish</p>
        </div>
      </div>
    </div>
  )
}

export default About