import React, { useState } from 'react';
import styles from './CartItem.module.scss';

export const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  // eslint-disable-next-line max-len
  const exampleUrl = 'https://applecity.com.ua/image/cache/catalog/iphone14/iphone-14-red-1000x1000.jpg';

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className={styles.cartitem}>
      <button className={styles.cartitem__close}></button>
      <img className={styles.cartitem__photo} src={exampleUrl} alt="" />
      <p className={styles.cartitem__name}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>
      <div className={styles.cartitem__block}>
        <div className={styles.cartitem__icons}>
          <button
            className={styles['cartitem__icons--minus']}
            onClick={handleDecrement}
          ></button>
          <p className={styles['cartitem__icons--quantity']}>{quantity}</p>
          <button
            className={styles['cartitem__icons--plus']}
            onClick={handleIncrement}
          ></button>
        </div>
        <p className={styles.cartitem__price}>$ {999 * quantity}</p>
      </div>
    </div>
  );
};
