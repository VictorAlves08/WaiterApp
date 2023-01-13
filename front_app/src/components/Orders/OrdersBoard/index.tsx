import React, { useState } from 'react';
import { Order } from '../../../types/Orders';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

type OrdersBoardInterface = {
  icon: string;
  title: string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status: Order['status']) => void;
}

export function OrdersBoard({ icon, title, orders, onCancelOrder, onChangeOrderStatus }: OrdersBoardInterface) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  // const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order) {
    setSelectedOrder(order);
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setSelectedOrder(null);
    setIsModalVisible(false);
  }

  // async function handleChangeOrderStatus() {
  //   setIsLoading(true);

  //   const status = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

  //   await api.patch(`/orders/${selectedOrder?._id}`, {status});


  //   toast.success(`O pedido da mesa ${selectedOrder?.table} teve o status alterado!`);

  //   onChangeOrderStatus(selectedOrder!._id, status);
  //   setIsLoading(false);
  //   setIsModalVisible(false);

  // }

  // async function handleCancelOrder() {
  //   setIsLoading(true);

  //   await api.delete(`/orders/${selectedOrder?._id}`);

  //   toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado`);

  //   onCancelOrder(selectedOrder!._id);
  //   setIsLoading(false);
  //   setIsModalVisible(false);
  // }


  return (
    <Board>
      {(isModalVisible || selectedOrder) &&
        <OrderModal
          // onChangeOrderStatus={handleChangeOrderStatus}
          // isLoading={isLoading}
          // onCancelOrder={handleCancelOrder}
          onClose={handleCloseModal}
          order={selectedOrder || {} as Order}
        />
      }

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button key={order._id} type='button' onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            );
          })}
        </OrdersContainer>
      )}
    </Board>
  );
};
