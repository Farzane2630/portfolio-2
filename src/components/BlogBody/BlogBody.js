import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Pagination from 'react-bootstrap/Pagination'
import Posts from '../BlogBody/Posts'
import RightSide from './RightSide'
import '../BlogBody/BlogBody.css'

export default function BlogBody() {
  return (
    <Container className='bb-container'>
      <Row className='blog-left-col'>
        {/* Left-side */}
        <Col xs={12} lg={8}>
        <Posts />
        <Pagination className='blog-pagination'>
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
        </Col>

        {/* Right-side */}
        <Col className='blog-right-col' xs={12} lg={4}>
          <RightSide />
        </Col>
      </Row>
      </Container>
  )
}
