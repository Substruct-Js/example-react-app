import React from 'react'
import { Link } from 'react-router-dom'

import Container from 'components/Container'

import StyledHeader from './styles/header'
import Logo from './styles/logo'
import Nav from './styles/nav'

export default function Header (props) {
  return (<Container>
    <StyledHeader>
      <Logo>
        <Link to='/'>Example App</Link>
      </Logo>
      <Nav>
          <li><Link to='/'>Home Page</Link></li>
          <li><Link to='/about'>About Page</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
      </Nav>
    </StyledHeader>
  </Container>)
}
