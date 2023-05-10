import React, { useMemo } from 'react';
import { useAppSelector } from '../../hooks';
import { CartItem } from '../../components/Cart/CartItem/CartItem';
import { Phones } from '../../types/Phones';

interface PhoneInCart {
  phone: Phones;
  count: number;
}

export const CartPage: React.FC = () => {
  const { list } = useAppSelector(store => store.phones);
  const cart = useAppSelector(store => store.cart);

  console.log(cart);

  const phonesInCart = useMemo(() => {
    return list.reduce((acc: PhoneInCart[], phone) => {
      const cartItem = cart.find(item => item.id === phone.id);

      if (cartItem) {
        acc.push({ phone, count: cartItem.quantity });
      }

      return acc;
    }, []);
  }, [cart, list]);

  return (
    <div className="container">
      <h1 className="title">Cart Page</h1>

      {phonesInCart.map(({ phone, count }) => (
        <CartItem
          key={phone.id}
          phone={phone}
          count={count}
        />
      ))}
    </div>
  );
};
