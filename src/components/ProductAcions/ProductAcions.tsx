import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { Phone } from '../../types/Phone';
import { Link } from 'react-router-dom';
import CardInfo from './CardInfo';

type Props = {
  phone: Phone | undefined,
}

const ProductAcions: React.FC<Props> = ({ phone }) => {
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<string | undefined>('');
  const [
    selectedCapacity,
    setSelectedCapacity,
  ] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedColor(phone?.color);
    setSelectedCapacity(phone?.capacity);
  }, [phone]);

  const phoneUrl = phone?.id;
  const availableColors = phone?.colorsAvailable;
  const availableCapacity = phone?.capacityAvailable;

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

        <div className={`${styles['product-acions__available-colors']}`}>
          {availableColors?.map((color) => {
            const isSelectedColor = selectedColor === color;

            let validColor = color;

            if (validColor === 'spacegray') {
              validColor = '#2b2f33';
            }

            if (validColor === 'rosegold') {
              validColor = '#edd1c2';
            }

            const parts = phoneUrl ? phoneUrl.split('-') : [];
            parts.splice(-1, 1, color);
            const linkUrl = parts.join('-');

            return (
              <Link
                to={`/product/${linkUrl}`}
                key={color}
                className={`${styles['product-acions__available-color-container']}`}
                style={{
                  border: isSelectedColor
                    ? '1px solid black'
                    : '1px solid #E2E6E9',
                }}
              >
                <div
                  className={`${styles['product-acions__available-color-container--color']}`}
                  style={{
                    backgroundColor: validColor,
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className={`${styles['product-acions__capacity-container']}`}>
        <div className={styles.description}>
          <p className={styles.text}>
            Select capacity
          </p>
        </div>

        <div className={`${styles['product-acions__available-capacity-container']}`}>
          {availableCapacity?.map((capacity) => {
            const isSelectedCapacity = selectedCapacity === capacity;

            const parts = phoneUrl ? phoneUrl.split('-') : [];
            parts.splice(-2, 1, capacity.toLocaleLowerCase());
            const linkUrl = parts.join('-');
            // fullPhoneUrlCopy.splice(-2, 1, capacity.toLocaleLowerCase());
            // console.log(fullPhoneUrlCopy);

            return (
              <Link
                to={`/product/${linkUrl}`}
                key={capacity}>
                <button
                  className={`${styles['product-acions__available-capacity-container--capacity']}`}
                  style={{
                    backgroundColor: isSelectedCapacity
                      ? '#313237'
                      : 'white',
                    border: isSelectedCapacity ? '0px' : '1px solid #B4BDC4',
                    color: isSelectedCapacity ? 'white' : '#313237',
                  }}
                  onClick={() => setSelectedCapacity(capacity)}
                >
                  {capacity}
                </button>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <CardInfo phone={phone} />
      </div>
    </div>
  );
};

export default ProductAcions;
