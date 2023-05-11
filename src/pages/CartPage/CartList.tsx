import React from 'react';
import { CartItem } from '../../components/Cart/CartItem/CartItem';
import styles from './CartPage.module.scss';

interface CartItem {
  id: string,
  count: number,
}

type Props = {
  cart: CartItem[];
};

export const CartList: React.FC<Props> = ({ cart }) => {
  return (
    <div>
      {cart.map((cartItem) => {
        return (
          <div key={cartItem.id} className={styles.cart__item}>
            {/* <CartItem /> */}
          </div>
        );
      })}
    </div>
  );
};

export default CartList;
