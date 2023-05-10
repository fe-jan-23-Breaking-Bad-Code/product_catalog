import React from 'react';
import CartList from './CartList';
import styles from './CartPage.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Vector from '../../img/vector-left.svg';

export const CartPage: React.FC = () => {
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    navigate('/');
  };

  return (
    <>
      <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
        <p className={styles.link} onClick={() => window.history.go(-1)}>
          <img className={styles.vector} src={Vector} alt="Back" />
          <p>
            Back
          </p>
        </p>
        <div className={`${styles['cart-list']} ${styles['grid__item--desktop-1-16']}`}>
          <h1 className={`${styles.title}`}>
            Cart
          </h1>

          <CartList />
        </div>

        <div className={`${styles['checkout-block']} ${styles['grid__item--desktop-17-24']}`}>
          <div className={styles['checkout-block__info']}>
            <p className={styles['checkout-block__cost']}>
              $2567
            </p>
            <p className={styles['checkout-block__items-count']}>
              Total for 3 items
            </p>
          </div>
          <button
            className={styles['checkout-block__button']}
            onClick={handleCheckoutClick}>
              Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
