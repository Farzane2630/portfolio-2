import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../TestimonialSection.css'

export default class Testimonial extends Component {
  
  render() {
    let {image, description, qoute} = this.props
    return (
    
      <Container className= 'flex-center'>
        
        <img src={image} className="testimonialImg" alt="user-avatar" />
        <p className='testimonial-desc'> {description} </p>
        <span className='qoute'> {qoute} </span>
        
      </Container>
        
    )
  }
}
