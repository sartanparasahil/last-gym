import React from 'react'
import BigGallery from '../components/BigGallery'
import Choose from '../components/Choose'
import FrontCarousel from '../components/FrontCarousel'

import Girl from '../components/Girl'
// import Pricing from '../components/Pricing'
import "../styles/LandingPage.css"
import Navbar from '../../sufiyan/pages/Navbar'
const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <FrontCarousel />
      <Choose />
      <Girl />
      {/* <Pricing /> */}
      <BigGallery />
    </div>
  )
}

export default LandingPage