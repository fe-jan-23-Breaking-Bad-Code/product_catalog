import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone | undefined,
}

export const AvailableColors: React.FC<Props> = ({ phone }) => {
  const [
    selectedColor,
    setSelectedColor,
  ] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedColor(phone?.color);
  }, [phone]);

  const phoneUrl = phone?.id;
  const availableColors = phone?.colorsAvailable;

  return (
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
              onClick={() => setSelectedColor(color)} />
          </Link>
        );
      })}
    </div>
  );
};
