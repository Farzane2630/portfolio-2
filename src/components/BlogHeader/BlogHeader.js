import React from 'react'
import { Container } from 'react-bootstrap'
import './BlogHeader.css'

export default function BlogHeader() {
  return (
    <>
    <Container fluid className='bh-container'>
        <h1> Blogs </h1>
        <p> We build effective strategies to help you reach customers and prospects across the entire web. </p>
    </Container>
    </>
    
  )
}
