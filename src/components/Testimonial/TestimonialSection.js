import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonial from './testimonial/testimonial'
import './TestimonialSection.css'

export default class TestimonialSection extends Component {
  constructor(props){
    super(props)

    this.state = {
        items : [
          {id: 1, image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"},
          {id: 2, image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"},
          {id: 3, image:"https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png", description:"Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation", qoute:"- Robert . Creative Director at Colorlib"},
        ]
    }
}
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };
    return (
      <div className='testimonial'>
        <p className='testimonialTitle'>Testimonial</p>
        <Slider style={{marginLeft: 0, marginRight: 0}} {...settings}>
        {this.state.items.map(item=>{
          return <Testimonial  key={item.id} {...item} />
        })}
         </Slider>
      </div>
    );
  }
}

