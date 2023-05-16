import React, { useEffect, useState } from 'react';
import styles from './OrdersPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { OrderList } from './OrderList';
import { getOrders } from '../../API/FetchPhones';
import { Orders } from '../../types/Orders';

export const OrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<Orders[]>([]);

  const getOrdersFromServer = async () => {
    try {
      const ordersFromServer = await getOrders();

      setOrders(ordersFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrdersFromServer();
  }, []);

  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']}`}>
        <BackButton />

        <div className={`${styles['cart-list']} ${styles['grid__item--desktop-1-16']}`}>
          <div className={styles.title}>
            <PagesTitle title="Order list" />

            <OrderList orders={orders} />
          </div>
        </div>
      </div>
    </>
  );
};
