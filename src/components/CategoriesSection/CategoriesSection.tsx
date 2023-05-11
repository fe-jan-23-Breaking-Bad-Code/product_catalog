import React from 'react';
import styles from './CategoriesSection.module.scss';
import phonesImg from './images/phones.png';
import tabletsImg from './images/tablets.png';
import accImg from './images/accesorises.png';

export const CategoriesSection = () => {
  return (
    <div className={`${styles.categories} ${styles['grid--tablet']}`}>
      <h1
        className={`${styles.categories__title} ${styles['grid__item--tablet-1-6']}`}
      >
        Shop by category
      </h1>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-1-4']}`}
      >
        <div className={styles['categories__category--container']}>
          <img
            src={phonesImg}
            alt="phones"
            className={styles['categories__category--photo']}
          />
        </div>
        <h2 className={styles['categories__category--title']}>Mobile phones</h2>
        <p className={styles['categories__category--text']}>95 models</p>
      </div>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-5-8']}`}
      >
        <div className={styles['categories__category--container']}>
          <img
            src={tabletsImg}
            alt="tablets"
            className={styles['categories__category--photo']}
          />
        </div>
        <h2 className={styles['categories__category--title']}>Tablets</h2>
        <p className={styles['categories__category--text']}>24 models</p>
      </div>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-9-12']}`}
      >
        <div className={styles['categories__category--container']}>
          <img
            src={accImg}
            alt="accesorises"
            className={styles['categories__category--photo']}
          />
        </div>
        <h2 className={styles['categories__category--title']}>Accessories</h2>
        <p className={styles['categories__category--text']}>100 models</p>
      </div>
    </div>
  );
};
