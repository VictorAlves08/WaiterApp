import React from 'react';

import logo from '../../assets/images/logo.svg';
import { Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <div className='header-details'>
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>

        <img src={logo} alt='Logo do WaiterApp' />
      </Content>
    </Container>
  );
};
