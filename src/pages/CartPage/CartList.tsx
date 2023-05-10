import React from 'react';
import CartList from './CartList';
import { CartItem } from '../../components/Cart/CartItem/CartItem';

export const CartPage: React.FC = () => (
  <>
    <CartItem />
    <CartItem />
    <CartItem />
  </>
);

export default CartPage;
