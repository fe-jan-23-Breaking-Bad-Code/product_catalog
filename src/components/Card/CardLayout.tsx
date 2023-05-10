import React from 'react';
import styles from './CardLayout.module.scss';
import { BASE_URL} from '../../API/FetchPhones';
import { Phones } from '../../types/Phones';

type Props = {
  phone: Phones;
}

export const PhoneCard: React.FC<Props> = ({ phone }) => {
  const {
    name,
    price,
    screen,
    capacity,
    ram,
    image
  } = phone;
  // eslint-disable-next-line max-len
  const imgUrl = BASE_URL + '/' + image;

  return (
    <div className={styles.card}>
      <img
        src={imgUrl}
        alt="Product_Image"
        className={styles.card__image}
      />

      <p className={styles.card__description}>
        {name}
      </p>

      <p className={styles.card__price}>${price}</p>

      <hr className={styles.card__devider}/>

      <div className={styles.card__information}>
        <p className={styles.card__information_description}>
          Screen
        </p>

        <p className={styles.card__information_description}>
          {screen}
        </p>

        <p className={styles.card__information_description}>
          Capacity
        </p>

        <p className={styles.card__information_description}>
          {capacity}
        </p>
        <p className={styles.card__information_description}>
          RAM
        </p>

        <p className={styles.card__information_description}>
          {ram}
        </p>
      </div>

      <div className={styles.card__buttons}>
        <button className={styles.card__buttons_buy}>
          Add to cart
        </button>

        <button className={styles.card__buttons_favourite} />
      </div>
    </div>
  );
};
