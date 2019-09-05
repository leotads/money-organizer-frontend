import React from 'react';

import { Container, DivLogo, DivUser } from './Styles';

const Header = () => {
  return (
    <Container className="Header">
      <DivLogo>
        Logo Empresa
      </DivLogo>
      <DivUser>
        teste
      </DivUser>
    </Container>
  )
}

export default Header;
