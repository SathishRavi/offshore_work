import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar'
import { Footer } from '../Components/Footer/Footer'
const About = () => {
  return (
    <div>
      <Navbar />
      <div className='contact-us'>
        <h5>Contact Us</h5>
        <p>Address: 6701 koll center parkway</p>
        <p>Pleasanton, CA - 94568</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;