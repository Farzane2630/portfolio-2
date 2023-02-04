import React, { Component } from 'react'

export default class Middlecols extends Component {
  constructor (){
    super()

    this.state = {
        navigations : [
            {id: 'home', title: 'Home'},
            {id: 'about', title: 'About'},
            {id: 'services', title: 'Services'},
            {id: 'blog', title: 'Blog'},
            {id: 'contact', title: 'Contact'},
        ],
        services: [
          {id: 1, title: 'Drone Mapping'},
          {id: 2, title: 'Real State'},
          {id: 3, title: 'Commercial'},
          {id: 4, title: 'Construction'},
        ]
    }
  }
  render() {
    return (
      <div className='middle-cols'>
      <div>
        <p className='footer-nav-title'> Navigation </p>
        <ul className='footer-navigation'>
          {this.state.navigations.map(nav=>{
            return <li><a href={nav.id}>{nav.title}</a></li>
          })}
        </ul>
      </div>
      <div>
        <p className='footer-service-title'> Services </p>
        <ul className='footer-services'>
          {this.state.services.map(service=>{
            return <li><a href={service.id}>{service.title}</a></li>
          })}
        </ul>
      </div>
      <div>
        <p className='footer-service-title'> Suport </p>
        <ul className='footer-services'>
          {this.state.services.map(service=>{
            return <li><a href={service.id}>{service.title}</a></li>
          })}
        </ul>
      </div>
      </div>
    )
  }
}
