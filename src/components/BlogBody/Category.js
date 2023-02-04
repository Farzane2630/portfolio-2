import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

export default function Category() {
    const [categories, setCategories] = useState([
        {id:1, title: 'Restaurant Food', num: '37'},
        {id:2, title: 'Travel news', num: '10'},
        {id:3, title: 'Modern technology', num: '03'},
        {id:4, title: 'Product', num: '11'},
        {id:5, title: 'Inspiration', num: '21'},
        {id:6, title: 'Health Care', num: '90'},
    ])
  return (
    <Container className='category-container gray-bg'>
      <p className="category-header"> Category </p> 
      {categories.map(category=>{
        return <>
        <hr />
        <p className='category-title' key={category.id}><a>{category.title}({category.num}) </a></p>
        </>
      })}
    </Container>
  )
}
