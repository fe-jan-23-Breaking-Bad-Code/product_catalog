import React from 'react';
import CartList from './CartList';
import styles from './CartPage.module.scss';
import { NavLink } from 'react-router-dom';

export const CartPage: React.FC = () => (
  <>
    <div className={`${styles.container} ${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
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
        <button className={styles['checkout-block__button']}>Checkout</button>
      </div>
    </div>
  </>
);

export default CartPage;
