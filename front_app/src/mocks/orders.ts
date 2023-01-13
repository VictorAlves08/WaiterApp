import { Order } from '../types/Orders';

import quatroQueijoImg from '../assets/images/quatro-queijos.png';
import cocaColaImg from '../assets/images/coca-cola.png';

export const orders: Order[] = [
  {
    _id: '6372e48cbcd195b0d3d0f7f3',
    table: '633',
    status: 'WAITING',
    products: [
      {
        product: {
          name: 'Pizza Quatro Queijos',
          imagePath: quatroQueijoImg,
          price: 50,
        },
        _id: '6372e48cbcd195b0d3d0f7f4',
        quantity: 3
      },
      {
        product: {
          name: 'Coca-Cola 2L',
          imagePath: cocaColaImg,
          price: 10,
        },
        _id: '6372e48cbcd195b0d3d0f7f5',
        quantity: 2
      }
    ],
  }
];
