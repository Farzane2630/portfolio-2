import React, { Component } from 'react'
import './Brand.css'

export default class Brand extends Component {
    constructor(props){
        super(props)

        this.state = {
            imgs: [
                "https://preview.colorlib.com/theme/calvino/assets/img/gallery/brand2.png.webp",
                "https://preview.colorlib.com/theme/calvino/assets/img/gallery/brand3.png.webp",
                "https://preview.colorlib.com/theme/calvino/assets/img/gallery/brand1.png.webp",
                "https://preview.colorlib.com/theme/calvino/assets/img/gallery/brand4.png.webp"
            ]
        }
    }
  render() {
    return (
      <div className='brand-container'>
      
            {this.state.imgs.map(img =>{
                return <img src={img}></img>
            })}
            
        
      </div>
    )
  }
}
