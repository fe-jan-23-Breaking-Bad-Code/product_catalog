import React, {useMemo, useState} from 'react';
import styles from './FavouritesPage.module.scss';
import { useAppSelector } from '../../hooks';
import { CardsGrid } from '../../components/CardsGrid';
import { getPhonesByIds } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { Loader } from '../../components/Loader/Loader';


export const FavouritesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);
  const [isLoading, setIsLoading] = useState(false);

  const breadcrumbs = [
    { path: '/favourites', title: 'Favourites' },
  ];

  const favouritePhones = useMemo(() => {
    const missingPhones = favourites.filter(
      id => !list.some(phone => phone.id === id)
    );

    if (missingPhones.length > 0) {
      setIsLoading(true);

      getPhonesByIds(missingPhones)
        .then(({ data }) => {
          dispatch(phonesActions.setMany(data));
        })
        .finally(() => {
          setIsLoading(false);
        });
    }

    return list.filter(({ id }) => favourites.includes(id));
  }, [favourites, list]);

  return (
    <div className={styles.container}>
      <BreadCrumb items = {breadcrumbs} />

      <div className={styles.title}>
        <PagesTitle title='Favourites'/>
      </div>

      {isLoading
        ? <Loader />
        : <CardsGrid productList={favouritePhones}/>
      }
    </div>
  );
};
