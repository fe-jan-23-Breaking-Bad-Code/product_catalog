import React from 'react';
import styles from './OrderPositionItem.module.scss';
import { Link } from 'react-router-dom';
import { Phones } from '../../types/Phones';
import { BASE_URL } from '../../API/FetchPhones';

interface Props {
  phone: Phones;
  quantity: number;
}

export const OrderPositionItem: React.FC<Props> = ({ phone, quantity }) => {
  const { id, image, fullPrice, name } = phone;
  const exampleUrl = BASE_URL + '/' + image;


  return (
    <div className={styles.cartitem}>
      <Link to={`/product/${id}`}>
        <img
          className={styles.cartitem__photo}
          src={exampleUrl}
          alt={name} />
      </Link>

      <Link
        to={`/product/${id}`}
        className={styles.cartitem__name}
      >
        {name}
      </Link>

      <div className={styles.cartitem__block}>
        <div className={styles.cartitem__icons}>
          <p className={styles['cartitem__icons--quantity']}>{quantity}</p>
        </div>

        <p className={styles.cartitem__price}>$ {fullPrice * quantity}</p>
      </div>
    </div>
  );
};
