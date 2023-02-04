import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function InstagramFeeds() {

    const [posts, setPosts] = useState([
        {id: 1, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_5.jpg.webp'},
        {id: 2, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_6.jpg.webp'},
        {id: 3, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_7.jpg.webp'},
        {id: 4, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_8.jpg.webp'},
        {id: 5, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_9.jpg.webp'},
        {id: 6, img: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_10.jpg.webp'},
    ])
  return (
    <Container className='insta-feed-container gray-bg'>
    <p>Instagram Feeds</p>
    <hr />
    <div className='insta-posts-container'>
        {posts.map(post=>{
            return <div key={post.id}> 
            <img className='insta-post' src={post.img} alt="Instagram Feed" />
            </div>
        })}
    </div>
    </Container>
  )
}
