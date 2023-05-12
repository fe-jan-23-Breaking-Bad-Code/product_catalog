import React, { useMemo } from 'react';
import styles from './FavouritesPage.module.scss';
import { useAppSelector } from '../../hooks';
import { CardsGrid } from '../../components/CardsGrid';
import { getPhonesByIds } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';


export const FavouritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);

  const favouritePhones = useMemo(() => {
    const missingPhones = favourites.filter(
      id => !list.some(phone => phone.id === id)
    );

    if (missingPhones.length > 0) {
      getPhonesByIds(missingPhones)
        .then(({ data }) => {
          dispatch(phonesActions.setMany(data));
        });
    }

    return list.filter(({ id }) => favourites.includes(id));
  }, [favourites, list]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PagesTitle title='Favourites'/>
      </div>

      <CardsGrid productList={favouritePhones} />
    </div>
  );
};
