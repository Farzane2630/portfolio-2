import React, { Component } from "react";
import Image from "./studyImg/Image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Case.css'

export default class Case extends Component {
  state = {
    srcs: [
      {
        src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs1.jpg.webp",
        id: 1,
      },
      {
        src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs2.jpg.webp",
        id: 2,
      },
      {
        src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs3.jpg.webp",
        id: 3,
      },
      {
        src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs2.jpg.webp",
        id: 2,
      },
      {
        src: "https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs3.jpg.webp",
        id: 3,
      },
      
    ],
  };
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };
    return (
        <div className="case-container">
          <p className="main-pink"> CASE STUDY </p>
          <h1 className="study-title"> Some Of Our Awesome Stuffs </h1>

          <Slider {...settings} style={{width: "90vw"}}>
            
            {this.state.srcs.map((src) =>{
              
              return <div className="img-container">
              <Image {...src} key={src.id} />
              </div>
  })}
            
          </Slider>
        </div>
    );
  }
}
