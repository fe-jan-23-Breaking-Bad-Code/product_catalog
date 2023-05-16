import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { Phone } from '../../types/Phone';
import CardInfo from './CardInfo';
import { AvailableColors } from './AvailableColors';
import { AvailableCapacity } from './AvailableCapacity';

type Props = {
  phone: Phone | undefined,
}

const ProductAcions: React.FC<Props> = ({ phone }) => {
  return (
    <div className={`
      ${styles['product-acions']}
      ${styles['product-acions--margin']}
      ${styles['grid__item--tablet-10-16']}
      ${styles['grid__item--desktop-13-24']}
      ${styles.container}
      `}
    >
      <div className={`${styles['product-acions__available-colors-container']}`}>
        <div className={styles.description}>
          <p className={styles.text}>
            Available colors
          </p>
          <p className={styles.id}>
            ID: 802390
          </p>
        </div>

        <AvailableColors phone={phone} />
      </div>

      <div className={`${styles['product-acions__capacity-container']}`}>
        <div className={styles.description}>
          <p className={styles.text}>
            Select capacity
          </p>
        </div>

        <AvailableCapacity phone={phone} />
      </div>

      <div>
        <CardInfo phone={phone} />
      </div>
    </div>
  );
};

export default ProductAcions;
