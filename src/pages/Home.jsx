import React from 'react'
import Header from '../compontes/Header'
import SpecalityMenu from '../compontes/SpecalityMenu'
import TopDoctors from '../compontes/TopDoctors'
import Baner from '../compontes/Baner'

const Home = () => {
  return (
    <div>
        <Header/>
        <SpecalityMenu/>
        <TopDoctors/>
        <Baner/>
    </div>
  )
}

export default Home