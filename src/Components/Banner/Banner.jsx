import React from 'react'
import hero from './2441.png'
import './Banner.css'
function Banner() {
  return (
    <>
    <div className="container">
        <div className="left text_Container">
            <div className="text_box">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iste quas et molestias porro perspiciatis.</p>
            <button className='download-btn'>Download App</button>
            </div>
        </div>
        <div className="right img_container">
            <img src={hero} className="hero_img"/>
        </div>
    </div>
    </>
  )
}

export default Banner