import React from 'react'
import './Client.css'
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'




export const Client = () => {
  return (
    <div> 
      <Navbar/>
      <div className='client-header' >
        <h1>Client</h1>
      </div>
    <Footer/>
    </div>
  )
}
