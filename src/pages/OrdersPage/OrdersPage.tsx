import React, { useEffect, useState } from 'react';
import styles from './OrdersPage.module.scss';
import { BackButton } from '../../components/BackButton/BackButton';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { OrderList } from './OrderList';
import { Orders } from '../../types/Orders';
import { getUserOrders } from '../../API/FetchUsers';
import { useAppSelector } from '../../hooks';
import { Loader } from '../../components/Loader/Loader';
import { MainButton } from '../../components/MainButton';
import { useDispatch } from 'react-redux';
import { actions } from '../../app/reducers/user';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';


export const OrdersPage: React.FC = () => {
  const { googleId } = useAppSelector(store => store.user);
  const [orders, setOrders] = useState<Orders[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getOrdersFromServer = async (userId: string) => {
    setIsLoading(true);
    try {
      const ordersFromServer = await getUserOrders(userId);

      setOrders(ordersFromServer);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (googleId) {
      getOrdersFromServer(googleId);
    }

  }, [googleId]);

  return (
    <>
      <div className={classNames(
        styles.container,
        styles.grid,
        styles['grid--tablet'],
        styles['grid--desktop'],
      )}>
        <div>
          <BackButton />
        </div>

        <div className={classNames(
          styles['logout-btn'],
          styles['grid__item'],
          styles['grid__item--desktop-20-24'],
          styles['grid__item--tablet-10-12'],
        )}>
          <MainButton
            content='Logout'
            handler={() => {
              dispatch(actions.logout());
              navigate('/login');
            }}
            isSelected={false}
          />
        </div>

        <div className={classNames(
          styles['cart-list'],
          styles['grid__item--desktop-1-16'],
          styles['grid__item--tablet-1-10'],
        )}>
          <div className={styles.title}>
            <PagesTitle title="Order list" />

            {isLoading
              ? <Loader />
              : <OrderList orders={orders} />
            }
          </div>
        </div>
      </div>
    </>
  );
};
