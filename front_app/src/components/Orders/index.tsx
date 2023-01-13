import React from 'react';

import { OrdersBoard } from './OrdersBoard';
import { Container } from './styles';

import { orders } from '.././../mocks/orders';

export const Orders = () => {
  return (
    <>
      <Container>
        <OrdersBoard icon='🕑' title='Fila de Espera' orders={orders} />
        <OrdersBoard icon='👩‍🍳' title='Em Produção' orders={[]} />
        <OrdersBoard icon='✅' title='Pronto!' orders={[]} />
      </Container>
    </>
  );
};
