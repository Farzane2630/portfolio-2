import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function NewsLetter() {
    const [email, setEmail] = useState('')
  return (
    <div className='news-letter-container gray-bg'>
        <p> Newsletter</p>
        <hr />
        <div className='news-deps'>
        <input type='email' 
        placeholder='Enter email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)} />
        <Button variant="outline-dark"> Subscribe </Button>
        </div>
    </div>
  )
}
