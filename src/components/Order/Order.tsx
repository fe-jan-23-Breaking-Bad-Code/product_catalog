import React from 'react';
import styles from './Order.module.scss';
import './bababoy.png';

export const Order: React.FC = () => {
  return (
    <div className={styles.order}>
      <div className={styles.baba}>
      </div>

      <div>
        <p className={styles.order__id}>
          № 392104
        </p>

        <p className={styles.order__done}>Done</p>
      </div>

      <div className={styles.yobaba}>
        <p className={styles.order__amout}>
          Order amount:
        </p>

        <p className={styles.order__price}>
          $200
        </p>
      </div>

      <img src="./bababoy.png" alt="" />
    </div>
  );
};
