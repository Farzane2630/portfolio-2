import { useState, React} from 'react'
import postsData from './postsData'
import { Container } from 'react-bootstrap'
import {FaComments, FaUser} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './BlogBody.css'

export default function Posts() {
    const [posts, setPost] = useState(postsData)
  return (
    <>
        {posts.map(post=>{
            return <Container className='post-container'>
              <Link to={`/blog/${post.id}`}>
              <img className='post-pic' src={post.image} alt="blog-post" />
              </Link>
            <div className='date'>
                <p className='day'>{post.day}</p>
                <p className='month'>{post.month}</p>
            </div>
           <Link style={{textDecoration: 'none', color: '#2D2D2D'}} to={`/blog/${post.id}`}> <h3 className='post-title'> {post.title} </h3></Link>
            <p className='post-summery'>{post.summery} </p>
            <div className='post-deps'>
            <span className='category'>
            <FaUser></FaUser> 
            <span>Travel, Lifestyle</span>
            </span>
            |
            <span className='comments'>
            <FaComments></FaComments> 
            <span> {post.comments} comments</span>
            </span>
            </div>
            
            </Container>
        })}
    </>
  )
}
