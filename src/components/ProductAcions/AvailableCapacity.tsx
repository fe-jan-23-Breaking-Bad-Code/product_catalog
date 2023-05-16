import React, { useEffect, useState } from 'react';
import styles from './ProductAcions.module.scss';
import { Link } from 'react-router-dom';
import { Phone } from '../../types/Phone';

type Props = {
  phone: Phone | undefined,
}


export const AvailableCapacity: React.FC<Props> = ({ phone }) => {
  const [
    selectedCapacity,
    setSelectedCapacity,
  ] = useState<string | undefined>('');

  useEffect(() => {
    setSelectedCapacity(phone?.capacity);
  }, [phone]);

  const phoneUrl = phone?.id;
  const availableCapacity = phone?.capacityAvailable;

  return (
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
  );
};
