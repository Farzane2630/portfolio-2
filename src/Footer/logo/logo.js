import React, { Component } from 'react'
import {TfiLinkedin} from 'react-icons/tfi'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import {SiYoutube} from 'react-icons/si'

export default class Logo extends Component {
  
  render() {
    return (
      <div className='logo-container'>
        <img className='footer-logo' src="https://preview.colorlib.com/theme/calvino/assets/img/logo/logo2_footer.png.webp" alt="logo" />
        <p> Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum </p>
        <div className='social-container'>
            <BsInstagram className='social' />
            <FaFacebook className='social' />
            <TfiLinkedin className='social' />
            <SiYoutube className='social' />
        </div>
      </div>
    )
  }
}
