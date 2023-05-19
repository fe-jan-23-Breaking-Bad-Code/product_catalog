import React from 'react';
import { Order } from '../../components/Order';
import { Orders } from '../../types/Orders';
import styles from './OrdersPage.module.scss';

type Props = {
  orders: Orders[],
}

export const OrderList: React.FC<Props> = ({ orders }) => {

  return (
    <ul>
      {orders.map(({ total, status, orderId, updatetAt}) => (
        <li key={orderId} className={styles.list__item}>
          <Order
            total={total}
            status={status}
            orderId={orderId}
            updatetAt={updatetAt}
          />
        </li>
      ))}
    </ul>
  );
};
