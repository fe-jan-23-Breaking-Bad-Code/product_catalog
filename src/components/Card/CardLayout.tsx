import React from 'react';
import styles from './CardLayout.module.scss';

export const PhoneCard = () => {
  // eslint-disable-next-line max-len
  const imgUrl = 'https://product-page-duuh.onrender.com/img/phones/apple-iphone-7/black/00.jpg';

  return (
    <div className={styles.card}>
      <img 
        src={imgUrl}
        alt="Product_Image" 
        className={styles.card__image}
      />

      <p className={styles.card__description}>
        Apple iPhone 14 Pro 128GB Silver (MQ023)
      </p>

      <p className={styles.card__price}>$899</p>

      <hr className={styles.card__devider}/>
      
      <div className={styles.card__information}>
        <p className={styles.card__information_description}>
          Screen
        </p>
        <p className={styles.card__information_description}>
          6.1” OLED
        </p>
        <p className={styles.card__information_description}>
          Capacity
        </p>
        <p className={styles.card__information_description}>
          64 GB
        </p>
        <p className={styles.card__information_description}>
          RAM
        </p>
        <p className={styles.card__information_description}>
          4 GB
        </p>
      </div>

      <div className={styles.card__buttons}>
        <button className={styles.card__buttons_buy}>Add to cart</button>
        <button className={styles.card__buttons_favourite} />
      </div>
    </div>
  );
};
