import React from 'react';
import CartList from './CartList';
import styles from './CartPage.module.scss';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Vector from '../../img/vector-left.svg';
import { useAppSelector } from '../../hooks';

interface CartItem {
  id: string,
  count: number,
}

const checkoutCost = (cart: CartItem[]): number => {
  return cart.reduce((total, item) => total + item.count, 0);
};

export const CartPage: React.FC = () => {
  const cart = useAppSelector(store => store.cart);
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

          <CartList cart={cart} />
        </div>

        <div className={`${styles['checkout-block']} ${styles['grid__item--desktop-17-24']}`}>
          <div className={styles['checkout-block__info']}>
            <p className={styles['checkout-block__cost']}>
              {`$${checkoutCost(cart)}`}
            </p>
            <p className={styles['checkout-block__items-count']}>
              {`Total for ${cart.length} items`}
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
