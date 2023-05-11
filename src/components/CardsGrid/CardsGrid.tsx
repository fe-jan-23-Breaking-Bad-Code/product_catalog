import React from 'react';
import styles from './CardsGrid.module.scss';
import { useAppSelector } from '../../hooks';
import { PhoneCard } from '../Card';
import classNames from 'classnames';
import { getGridClasses } from '../../utils/gridHelper';
import { Phones } from '../../types/Phones';

interface Props {
  productList: Phones[],
}

export const CardsGrid: React.FC<Props> = ({
  productList
}) => {
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);

  return (
    <div className={classNames(
      styles['cards_grid'],
      styles.grid,
      styles['grid--desktop'],
      styles['grid--tablet'],
    )}>
      {productList.map((phone, index) => (
        <div
          className={classNames(
            styles['cards_grid__item'],
            ...getGridClasses(styles, index, 4, 6),
          )}
          key={phone.id}
        >
          <PhoneCard
            phone={phone}
            isInCart={cart.some(({ id }) => id === phone.id)}
            isInFavourites={favourites.includes(phone.id)}
          />
        </div>
      ))}
    </div>
  );
};
