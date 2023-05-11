import React, { useMemo } from 'react';

import { useAppSelector } from '../../hooks';
import { PhoneCard } from '../../components/Card';


export const FavouritesPage: React.FC = () => {
  const { list } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);

  const favouritePhones = useMemo(() => {
    return list.filter(({ id }) => favourites.includes(id));
  }, [favourites]);

  return (
    <div className="container">
      <h1 className="title">Phones Page</h1>

      {favouritePhones.map(phone => (
        <PhoneCard
          key={phone.id}
          phone={phone}
          isInCart={cart.some(({ id }) => id === phone.id)}
          isInFavourites={favourites.includes(phone.id)}
        />
      ))}
    </div>
  );
};
