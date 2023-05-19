import React, { useEffect, useState } from 'react';
import styles from './OrderDetailsPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { getOrderById } from '../../API/FetchUsers';
import { Loader } from '../../components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { OrderPositionList } from '../../components/OrderPositionList';
import { OrderItem } from '../../types/OrderItem';


export const OrderDetailsPage: React.FC = () => {
  const { orderId } = useParams();
  const [orderDetails, setOrdersDetails] = useState<OrderItem[]>();
  const [isLoading, setIsLoading] = useState(false);


  const getOrdersFromServer = async (id: number) => {
    setIsLoading(true);
    try {
      const orderDetailsFromServer = await getOrderById(id);

      setOrdersDetails(orderDetailsFromServer);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrdersFromServer(Number(orderId));
  }, []);

  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']}`}>
        <BackButton />

        <div className={`${styles['cart-list']} ${styles['grid__item--desktop-1-16']}`}>
          <div className={styles.title}>
            <PagesTitle title={`Order #${orderId}`} />

            {isLoading
              ? <Loader />
              : orderDetails && (
                <OrderPositionList orderItems={orderDetails} />
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};
