import React from 'react'
import Category from './Category'
import RecentPosts from './RecentPosts'
import TagCloudes from './TagCloudes'
import InstagramFeeds from './InstagramPosts'
import NewsLetter from './NewsLetter'
import { Container } from 'react-bootstrap'
import './BlogBody.css'

export default function RightSide() {
  return (
    <Container className='right-col-container'>
       <div className='search-box gray-bg'>
            <input className='search-input' placeholder='Search Keyword'></input>
            <button className='search-btn'>Search</button>
          </div>
          <Category />
          <RecentPosts />
          <TagCloudes />
          <InstagramFeeds />
          <NewsLetter /> 
    </Container>
  )
}
