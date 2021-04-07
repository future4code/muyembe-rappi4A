import React from 'react';
import logo from '../../img/logo-future-eats-invert.png'
import { Container } from './styled'

function Header() {
  return (
    <Container>
      <img src={logo} />
    </Container>
  );
}

export default Header;
