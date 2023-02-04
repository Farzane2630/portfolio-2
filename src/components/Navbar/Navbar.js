import React from "react";
import { Container } from "react-bootstrap";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";

export default function Navigationbar() {
  return (
    <Container style={{ padding: 0 }} fluid>
      <nav>
        <img
          id="home"
          src="https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png.webp"
          alt="logo"
        ></img>
        <ul className="nav-items">
          <li>
            <Link to={"/"}> Home </Link>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
          <li>
            <a href="#services"> Services </a>
          </li>
          <li>
            <a href="#case-study"> Case Study </a>
          </li>
          <li>
            <Link to="/blog"> Blog </Link>
          </li>
          <li>
            <a href="#contact"> Contact </a>
          </li>
        </ul>
        <div className="phone">
          <p> Call Us: +10 (78) 378 3784 </p>
        </div>
        <button className="talk but-color"> Let`s Talk </button>
      </nav>
    </Container>
  );
}
