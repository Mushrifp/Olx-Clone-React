import React from 'react'
import MenuBar from '../components/MenuBar'
import banner from '../assets/bannerr.png'
import Footer from '../components/Footer'
import Recommendations from '../components/Recommendations'

function Home() {
  return (
    <>
         <MenuBar/>
         <img src={banner} alt="banner" className=' w-full' />
         <Recommendations/>
         <Footer/>
    </>
  )
}

export default Home