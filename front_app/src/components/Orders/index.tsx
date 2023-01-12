import React from 'react';

import { OrdersBoard } from './OrdersBoard';
import { Container } from './styles';


export const Orders = () => {
  return (
    <>
      <Container>
        <OrdersBoard icon='🕑' title='Fila de Espera' queue='(3)' table='Mesa 3' itens='3 itens' />
        <OrdersBoard icon='👩‍🍳' title='Em Produção' queue='(2)' table='Mesa 2' itens='2 itens' />
        <OrdersBoard icon='✅' title='Pronto!' queue='(1)' table='Mesa 1' itens='1 itens' />
      </Container>
    </>
  );
};
