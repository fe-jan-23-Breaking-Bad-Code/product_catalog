import React from 'react';
import { Order } from '../../components/Order';
import { Orders } from '../../types/Orders';


type Props = {
  orders: Orders[],
}

export const OrderList: React.FC<Props> = ({ orders }) => {
  return (
    <div>
      {orders.map(({ data, total, status, orderId}) => (
        <div key={orderId}>
          <Order data={data} total={total} status={status} orderId={orderId}/>
        </div>
      ))}
    </div>
  );
};
