import React from 'react';
import styles from './OrdersPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { OrderList } from './OrderList';

export const OrdersPage: React.FC = () => {
  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']}`}>
        <BackButton />

        <div className={`${styles['cart-list']} ${styles['grid__item--desktop-1-16']}`}>
          <div className={styles.title}>
            <PagesTitle title="Order list" />

            <OrderList />
          </div>
        </div>
      </div>
    </>
  );
};
