import React from 'react'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
import './page.css'
import ImageSlider from 'react-simple-image-slider'
import { Slider } from '../Components/Slider/Slider'
export const Homepage = () => {
    return (

        <div className='head-bng'>
            <Navbar />
            <div className='client-header' >
        <h1>Client</h1>
      </div>
            <Footer />
        </div>
    )
}
