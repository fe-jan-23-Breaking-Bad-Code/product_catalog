import React from 'react';
import CartList from './CartList';

export const CartPage: React.FC = () => (
  <div className="container">
    <h1 className="title">Cart</h1>

    <CartList />

    <div className='checkout-block'>
      <p className='checkout-block__cost'>$2567</p>
      <p className='checkout-block__items-count'>Total for 3 items</p>
      <button className='checkout-block__button'>
        Checkout
      </button>
    </div>
  </div>
);

export default CartPage;