import React, { useState } from 'react';
import { assets } from '../assets/assets_frontend/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Teshavoy",
    email: 'sspefe@gmail.com',
    phone: '+998 88 123 77 88',
    image: assets.profile_pic,
    address: {
      line1: 'munavar qori',
      line2: '3a Uy',
    },
    gender: 'Erkak',
    dop: '2000-1-20',
  });

  const [isEdit, setIsEdit] = useState(true); // manage editing state


  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className='w-36 rounded' src={userData.image} alt="" />

      {
        isEdit
          ? <input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-gray-900 mt-4' >{userData.name}</p>
      }
      <hr className='bg-brown-50 h-[1px] border-none ' />
      <div>
        <p className='text-gray-500 underline mt-3'>ALOQA MA'LUMOTLARI</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>{userData.email}</p>
          <p className='font-medium'>Telfon</p>
          {
            isEdit
              ? <input className='bg-gray-100 max-w-52 ' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
          <p className='font-medium'>Manzil:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <br />
                <input className='bg-gray-50' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </p>
              : <p className='text-gray-500'>
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
          }
        </div>
        <p className='text-gray-500 underline mt-3'>ASOSIY MA'LUMOTLAR</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-700'>
          <p className='font-medium'>Jins:</p>
          {
            isEdit
              ? <select className='max-w-20 bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Erkak">Erkak</option>
                <option value="Ayol">Ayol</option>
              </select>
              : <p className='text-gray-400'>{userData.gender}</p>
          }
          <p className='font-medium'>Tugulgan sana:</p>
          {
            isEdit ? <input className='max-w-28 bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dop: e.target.value }))} value={userData.dop} />
              : <p className='text-gray-400'>{userData.dop}</p>
          }
        </div>
      </div>
    
      <div className='mt-10'>
        {
          isEdit ? <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(false)}>Informatsiani saqalash</button>
            : <button className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Yangilash</button>
        }
      </div>
    </div> 
  );
};

export default MyProfile;
