import React from 'react'
import Service from '../Service/Service'
import '../Services/Services.css'

export default class Services extends React.Component {

  state = {
    imgArray : [
      {id:1, image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg", title: "Discover, Explore the Product #1", description: "Effective strategies to help you reach customers.1"},
      {id:2, image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services2.svg", title: "Discover, Explore the Product #2", description: "Effective strategies to help you reach customers.2"},
      {id:3, image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services3.svg", title: "Discover, Explore the Product #3", description: "Effective strategies to help you reach customers.3"},
      {id:4, image: "https://preview.colorlib.com/theme/calvino/assets/img/icon/services4.svg", title: "Discover, Explore the Product #4", description: "Effective strategies to help you reach customers.4"},
    ]
  }
  render () {
    return (
      <div className='services-container' id='services'>
          <p> OUR SERVICES </p>
          <h1 className='black-title'> Provide Awesome Service </h1>
          <h1> With Our Tools </h1>
          <div className='service-box'>

              {this.state.imgArray.map((img, id)=>(
                <div key={id}>
                   <Service {...img}/>
                </div>
               
              ))}
              
          </div>
         </div>
    )
  }
}
