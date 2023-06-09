import React from 'react';
import styles from './CategoriesSection.module.scss';
import phonesImg from './images/phones.png';
import tabletsImg from './images/tablets.png';
import accImg from './images/accesorises.png';
import { Link } from 'react-router-dom';

export const CategoriesSection = () => {
  return (
    <div className={`${styles.categories} ${styles.grid} ${styles['grid--tablet']} ${styles['grid--desktop']}`}>
      <h1
        className={`${styles.categories__title} ${styles['grid__item--tablet-1-6']}`}
      >
        Shop by category
      </h1>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-1-4']} ${styles['grid__item--desktop-1-8']}`}
      >
        <Link
          to="/phones">
          <div className={styles['categories__category--container']}>
            <img
              src={phonesImg}
              alt="phones"
              className={styles['categories__category--photo']}
            />
          </div>
        </Link>
        <Link
          to ="/phones "
          className={styles['categories__category--title']}>
        Mobile phones
        </Link>
        <p className={styles['categories__category--text']}>95 models</p>
      </div>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-5-8']} ${styles['grid__item--desktop-9-16']}`}
      >
        <Link
          to="/tablets">
          <div className={styles['categories__category--container']}>
            <img
              src={tabletsImg}
              alt="tablets"
              className={styles['categories__category--photo']}
            />
          </div>
        </Link>
        <Link
          to="/tablets"
          className={styles['categories__category--title']}>
            Tablets
        </Link>
        <p className={styles['categories__category--text']}>24 models</p>
      </div>

      <div
        className={`${styles.categories__category} ${styles['grid__item--tablet-9-12']} ${styles['grid__item--desktop-17-24']}`}
      >
        <Link
          to="/accessories">
          <div className={styles['categories__category--container']}>
            <img
              src={accImg}
              alt="accesorises"
              className={styles['categories__category--photo']}
            />
          </div>
        </Link>
        <Link
          to="/accessories"
          className={styles['categories__category--title']}>
            Accessories
        </Link>
        <p className={styles['categories__category--text']}>100 models</p>
      </div>
    </div>
  );
};
