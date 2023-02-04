import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function RecentPosts() {
    const [posts, setPosts] = useState([
        {id:1, image: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_1.jpg.webp', title: 'From life was you fish...', date: 'January 12, 2019'},
        {id:2, image: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_2.jpg.webp', title: 'The Amazing Hubble', date: '02 Hours ago'},
        {id:3, image: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_3.jpg.webp', title: 'Astronomy Or Astrology', date: '03 Hours ago'},
        {id:4, image: 'https://preview.colorlib.com/theme/calvino/assets/img/post/post_4.jpg.webp', title: 'Asteroids telescope', date: '01 Hours ago'},
    ])
  return (
    <Container className='recent-post-container gray-bg'>
    <p className='resent-post-hesder'> Recent Posts</p>
    <hr></hr>
    {posts.map(post=>{
        return <Container className='recent-posts'>
        <img src={post.image} alt="post" />
        <div>
            <p className='rp-title'>{post.title}</p>
            <p className='rp-date'>{post.date}</p>
        </div>
        </Container>
    })}
    </Container>
  )
}
