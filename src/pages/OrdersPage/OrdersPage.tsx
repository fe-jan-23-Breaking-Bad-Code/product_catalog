import React, { useEffect, useState } from 'react';
import styles from './OrdersPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { OrderList } from './OrderList';
import { Orders } from '../../types/Orders';
import { getUserOrders } from '../../API/FetchUsers';
import { useAppSelector } from '../../hooks';


export const OrdersPage: React.FC = () => {
  const { googleId } = useAppSelector(store => store.user);
  const [orders, setOrders] = useState<Orders[]>([]);

  const getOrdersFromServer = async (userId: string) => {
    try {
      const ordersFromServer = await getUserOrders(userId);

      setOrders(ordersFromServer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (googleId) {
      getOrdersFromServer(googleId);
    }

  }, [googleId]);

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
