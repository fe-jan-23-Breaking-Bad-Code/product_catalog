import React, { useEffect, useState } from 'react';
import styles from './CartItem.module.scss';
import { useDispatch } from 'react-redux';
import { actions as cartActions } from '../../../app/reducers/cart';
import { Phones } from '../../../types/Phones';
import { BASE_URL } from '../../../API/FetchPhones';

interface Props {
  phone: Phones,
  count: number,
}

export const CartItem: React.FC<Props> = ({
  phone,
  count,
}) => {
  const {
    id,
    image,
  } = phone;
  const [quantity, setQuantity] = useState(count);
  const dispatch = useDispatch();
  const exampleUrl = BASE_URL + '/' + image;

  useEffect(() => {
    dispatch(cartActions.setCount({id, quantity: quantity}));
  }, [quantity]);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(cartActions.remove(id));
  };

  return (
    <div className={styles.cartitem}>
      <button
        className={styles.cartitem__close}
        onClick={handleRemoveFromCart}
      />

      <img className={styles.cartitem__photo} src={exampleUrl} alt="" />

      <p className={styles.cartitem__name}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>

      <div className={styles.cartitem__block}>
        <div className={styles.cartitem__icons}>
          <button
            className={styles['cartitem__icons--minus']}
            onClick={handleDecrement}
          />
          <p className={styles['cartitem__icons--quantity']}>{quantity}</p>
          <button
            className={styles['cartitem__icons--plus']}
            onClick={handleIncrement}
          />
        </div>

        <p className={styles.cartitem__price}>
          $ {999 * quantity}
        </p>
      </div>
    </div>
  );
};
