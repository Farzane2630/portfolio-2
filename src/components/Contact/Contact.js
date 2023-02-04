import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import './Contact.css'

export default class Contact extends Component {
  render() {
    return (
      <Container id='contact' fluid>
        <div className='contact-details my-3 me-5'>
            <h2> Interested To Digging Dipper?</h2>
            <p> We’re out to create purposeful spaces that balance art and creativity with science and strategy. </p>
            <button className='contact-btn'> Contact Us </button>
        </div>
      </Container>
    )
  }
}
