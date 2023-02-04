import React, { Component } from 'react'
import '../studyImg/Image.css'
export default class Image extends Component {
  render() {
    return (
      <>
        <img className='study-img' src={this.props.src}></img>
      </>
    )
  }
}
