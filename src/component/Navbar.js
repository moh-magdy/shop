import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../logo.svg'

import {ButtnContainer} from './Button'


export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to='/'>
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5"> 
            <Link to="/" className="nav-link">
              prodacts
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtnContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
              </span>
            my cart
          </ButtnContainer>
        </Link>
      </nav>
    )
  }
}
