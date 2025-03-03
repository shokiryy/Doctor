import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppoinment from './pages/MyAppoinment'
import Appointment from './pages/Appointment'
import Navbar from './compontes/Navbar'
import Foter from './compontes/Foter'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/doctors' element={<Doctors/>} />
       <Route path='/doctors/:speciality' element={<Doctors/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contact/>} />
       <Route path='/myprofile' element={<MyProfile/>} />
       <Route path='/my-appontments' element={<MyAppoinment/>} />
       <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
      <Foter/>
    </div>
  )
}

export default App