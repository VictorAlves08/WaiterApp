import React from 'react';
import { Board, OrdersContainer } from './styles';

interface OrdersBoardInterface {
  icon: string;
  title: string;
  queue: string;
  table: string;
  itens: string;
}

export const OrdersBoard = ({ icon, title, queue, table, itens }: OrdersBoardInterface) => {
  return (
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>{queue}</span>
      </header>

      <OrdersContainer>
        <button type='button'>
          <strong>{table}</strong>
          <span>{itens}</span>
        </button>
      </OrdersContainer>
    </Board>
  );
};
