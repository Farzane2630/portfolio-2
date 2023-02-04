import React, { Component } from 'react'

export default class 
 extends Component {

  render() {
    return (
      <div id='plan-container' className='flex-center'>
        <div className='plan-icon'>
            <img src={this.props.icon}></img>
        </div>
        <p className='main-pink'>{this.props.type}</p>
        <h2 id='price'> $ {this.props.price} </h2>
        <p className='plan-detail'>{this.props.detail}</p>
        <button className='started-but'> Get Started </button>
      </div>
    )
  }
}
