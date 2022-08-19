import React from 'react'
import { BsShieldShaded } from "react-icons/bs";
import screens from './2211.png'
import './Feature.css'
function Feature() {
  return (
    <>
    <div className="feature_container">
        <div className="left_image">
          <img src={screens} className='Screens_image' srcset="" />
        </div>
        <div className="right_content">
          <h2>Stay Organized <br/>effortlessly</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Cumque incidunt quam facere maiores? Doloremque, 
            reprehenderit vero. Ipsa hic quibusdam sapiente</p>
        </div>
    </div>
    </>
  )
}

export default Feature