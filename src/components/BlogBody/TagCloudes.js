import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import './BlogBody.css'

export default function TagCloudes() {
    const [titles, setTitles] = useState([
        {id: 1, title:'projec'}, {id: 2, title:'love'}, 
        {id: 2, title:'technology'}, {id: 4, title:'travel'},
        {id: 5, title:'restaurant'}, {id: 6, title:'life style'}, 
        {id: 7, title:'design'},{id: 2, title:'illustration'}
    ])
  return (
    <Container className='tag-cloud-container gray-bg'>
       <p>Tag Clouds</p>
        <hr />
        <div className='cluod-options'>
            {titles.map(title=>{
            return <button className='cluod-btn' key={title.id}>{title.title}</button>
        })}
        </div>
        
    </Container>
  )
}
