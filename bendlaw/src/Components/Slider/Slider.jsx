import React from 'react'
import { Zoom } from 'react-slideshow-image';
import image1 from '../Assets/image1.jpg'
import image2 from '../Assets/image2.jpg'
import image3 from '../Assets/image3.jpg'

const images = [
    "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-kehn-hermano-3584437-scaled.jpg",
    "https://www.bendlawoffice.com/wp-content/uploads/2023/07/pexels-sean-p-twomey-14878642-scaled.jpg",
    "https://www.bendlawoffice.com/wp-content/uploads/2014/06/pexels-kehn-hermano-3584437-scaled.jpg",
  ];

export const Slider = () => {
  return (
    <div className="slide-container">
        <Zoom >
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
  )
}
