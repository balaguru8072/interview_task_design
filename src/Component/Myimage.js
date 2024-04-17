import React from 'react';
import men_image from '../assets/images/men_image.png';
import '../assets/CSS/Navbar.css'

function Myimage() {
  return (

    <div className="position-relative d-flex justify-content-end pr-5">
      <figure>
        <img
          src={men_image}
          alt="Charles Kasasira"
          width={'75%'}
          height={'75%'}
          style={{ marginRight: '73px', marginLeft: '18px' }}
          className="z-index-10"
        />
      </figure>

      <div
        style={{ width: '82%', height: '90%' }}
        className="bg-orange rounded-circle position-absolute end-0 bottom-0 z-index-neg-10"
      ></div>
    </div>

  )
}

export default Myimage