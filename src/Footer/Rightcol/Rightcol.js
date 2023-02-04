import React from 'react'
import '../Footer.css'

export default function Rightcol() {
  return (
    <div className='right-col-container'>
        <p className='right-col-title'> Contact Us </p>
        <ul>
            <li><a href="#">Drone Mapping</a></li>
            <li className='footer-email'> contact@carwash.com </li>
            <li className='footer-phone'> 10 (87) 738-3940 </li>
        </ul>
    </div>
  )
}
