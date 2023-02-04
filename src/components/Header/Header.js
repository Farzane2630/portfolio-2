import React from "react";
import './Header.css'

export default class Header extends React.Component {
    render (){
        return (
            <div className="header-main">
                <div className="intro">
                <div className="digital">Digital Marketing Expert</div>
                <h1 className="header-title">We bring you new customers</h1>
                <p className="header-desc"> we build effective strategies to help you reach customers and prospects across the entire web</p>
                <button className="explore but-color">Explore Services</button>
            </div>
            </div>
        )
    }
}