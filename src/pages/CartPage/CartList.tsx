import React from 'react';
import { CartItem } from '../../components/Cart/CartItem/CartItem';
import styles from './CartPage.module.scss';
import { CartPhone } from '../../types/CartPhone';


type Props = {
  cart: CartPhone[];
};

export const CartList: React.FC<Props> = ({ cart }) => {

  return (
    <div>
      {cart.map(({ phone, quantity }) => (
        <div key={phone.id} className={styles.cart__item}>
          <CartItem  phone={phone} count={quantity}/>
        </div>
      )
      )}
    </div>
  );
};

export default CartList;
