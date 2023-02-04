import React, { Component } from 'react'

export default class 
 extends Component {
  render() {
    return (
      <div id='services' className='service-container'>
        <h3> {this.props.title}</h3>
        <div className='service-icon'>
            <img src={this.props.image}></img>
        </div>
        {this.props.description}
      </div>
    )
  }
}
