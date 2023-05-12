import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import stylesCard from '../Card/CardLayout.module.scss';
import { getPhoneById } from '../../API/FetchPhones';
import { Phone } from '../../types/Phone';
import { MainButton } from '../MainButton';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardInfo from './CardInfo';

type Props = {
  phone: Phone | undefined,
  color: string | undefined,
  capacity: string | undefined,
  id: string | undefined,
}

const ProductAcions: React.FC<Props> = ({ phone, color, capacity, id }) => {
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<string | undefined>('');
  const [
    selectedCapacity,
    setSelectedCapacity,
  ] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedColor(color);
    setSelectedCapacity(capacity);
  }, [phone]);

  const availableColors = phone?.colorsAvailable;
  const availableCapacity = phone?.capacityAvailable;

  return (
    <div className={`${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
      <div className={`${styles['product-acions']} ${styles['product-acions--margin']} ${styles['grid__item--tablet-5-12']}`}>
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

              const parts = id ? id.split('-') : [];
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
                      backgroundColor: color,
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

              const parts = id ? id.split('-') : [];
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
    </div>
  );
};

export default ProductAcions;
