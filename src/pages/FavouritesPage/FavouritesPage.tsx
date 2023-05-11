import React, { useMemo } from 'react';
import styles from './FavouritesPage.module.scss';
import { useAppSelector } from '../../hooks';
import { CardsGrid } from '../../components/CardsGrid';


export const FavouritesPage: React.FC = () => {
  const { list } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);

  const favouritePhones = useMemo(() => {
    return list.filter(({ id }) => favourites.includes(id));
  }, [favourites]);

  return (
    <div className={styles.container}>
      <h1 className="title">Phones Page</h1>

      <CardsGrid productList={favouritePhones} />
    </div>
  );
};
