import React from 'react'
import './WhyUs.css'

export default function WhyUs() {
  return (
    <div className='why-container'>
        <p className='main-pink'> WHY CHOOSE US </p>
        <div className='why-middle'>
            <h1> We are an SEO company that specializes in developing </h1>
            <p className='explore-more'> Explore More </p>
        </div>
        <div className='divide-line'></div>
        <div className='why-bottom'>
            <div className='statistic'>
            <div className='numbers bordered'>
                <h1 className='main-pink'> 450+ </h1>
                <p className="grayish-txt"> Successfully completed projects </p>
            </div>
                <div className='numbers'>
                    <h1 className='main-pink'> 860 </h1>
                    <p className="grayish-txt"> Highly specialised employees </p>
                </div>
            </div>
            <div className='why-desc grayish-txt'>
                <p>
                    With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.
                </p>
                <p className='why-desc grayish-txt'>
                    - Shonda Leer, Chief of Staff at Franclin Technologies
                </p>
            </div>
        </div>
        
    </div>
  )
}
