import React from 'react'
import './About.css'

export default function About(props) {
  return (
    <div className='about-container flex-center bg' id='about'>
       <div className='about-img'>
            <img src={props.src} alt={props.alt}></img>
        </div> 
        <div className='about-desc'>
            <p className='title'> ABOUT US </p>
            <h1 className='black-title'> We Create a Steps to Build a Successful Digital Product </h1>
            <p className='detail'> With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy. </p>
            <p className='detail'>We’re out to create purposeful spaces that balance art and creativity with science and strategy. </p>
            <p className='explore-more'> Explore More </p>
        </div>
    </div>
  )
}


About.defaultProps = {
    src : "https://preview.colorlib.com/theme/calvino/assets/img/gallery/about1.png.webp",
    alt: "CEO Picture"
}
