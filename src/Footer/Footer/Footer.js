import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import '../Footer.css'
import Logo from '../logo/logo'
import Middlecols from '../Middlecols/Middlecols'
import Rightcol from '../Rightcol/Rightcol'

export default class Footer extends Component {
  render() {
    return (
      <Container id='footer-container' fluid>
        <Logo />
        <Middlecols />
        <Rightcol />
      </Container>
    )
  }
}
