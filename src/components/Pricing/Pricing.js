import React, { Component } from 'react'
import Plan from './Plan/Plan'
import './Pricing.css'

export default class Pricing extends Component {
    state = {
        plans :[
            {id: 1, icon:"https://preview.colorlib.com/theme/calvino/assets/img/icon/price1.svg" , type: "Basic", price: 50, detail: "Increase traffic 15% Social Media Marketing 10 Free Optimization 24/7 support"},
            {id: 2, icon:"https://preview.colorlib.com/theme/calvino/assets/img/icon/price2.svg" , type: "Advanced", price: 100, detail: "Increase traffic 30% Social Media Marketing 10 Free Optimization 24/7 support"},
            {id: 3, icon:"https://preview.colorlib.com/theme/calvino/assets/img/icon/price3.svg" , type: "Premium", price: 120, detail: "Increase traffic 50% Social Media Marketing 10 Free Optimization 24/7 support"},
        ]
    }

  render() {
    return (
      <div className='price-container flex-center' id='bg'>
        <p className='main-pink'> PRICING PLANS </p>
        <h1 className='price-title black-title'> Choose Your Best Pricing Plan </h1>
        <div className='but-container flex-center'>
            <button id='yearly'> YEARLY </button>
            <button id='monthly'> MONTHLY </button>
        </div>
        <div className='flex-center plans-container'>
        {this.state.plans.map((plan, id)=>(
            <div key={id}>
                <Plan {...plan} />
        </div> 
        ))
           
        }
        </div>
        
      </div>
    )
  }
}
