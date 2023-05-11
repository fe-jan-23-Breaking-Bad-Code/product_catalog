import React, { useMemo } from 'react';
import { CartItem } from '../../components/Cart/CartItem/CartItem';
import { useAppSelector } from '../../hooks';
import { Phones } from '../../types/Phones';

interface PhoneInCart {
  phone: Phones;
  count: number;
}

export interface CartItem {
  id: string,
  count: number,
}

type Props = {
  cart: CartItem[];
};

export const CartList: React.FC<Props> = ({ cart }) => {
  const { list } = useAppSelector(store => store.phones);

  const phonesInCart = useMemo(() => {
    return list.reduce((acc: PhoneInCart[], phone) => {
      const cartItem = cart.find(item => item.id === phone.id);

      if (cartItem) {
        acc.push({ phone, count: 255 });
      }

      return acc;
    }, []);
  }, [cart, list]);

  return (
    <div>
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

export default CartList;
