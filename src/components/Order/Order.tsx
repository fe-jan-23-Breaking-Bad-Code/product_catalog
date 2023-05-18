import React from 'react';
import styles from './Order.module.scss';
import './bababoy.png';
import { Orders } from '../../types/Orders';


export const Order: React.FC<Orders> = ({ status, total, orderId }) => {
  return (
    <div className={styles.order}>
      <div className={styles.baba}>
      </div>

      <div>
        <p className={styles.order__id}>
          № {orderId}
        </p>

        <p className={styles.order__done}>
          {status}
        </p>
      </div>

      <div className={styles.yobaba}>
        <p className={styles.order__amout}>
          Order amount:
        </p>

        <p className={styles.order__price}>
          ${total}
        </p>
      </div>

      <img src="./bababoy.png" alt="" />
    </div>
  );
};
