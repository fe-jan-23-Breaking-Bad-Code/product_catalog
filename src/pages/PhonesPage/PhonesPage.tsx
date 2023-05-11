import React, { useEffect, useState } from 'react';
import { getPhones } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useAppSelector } from '../../hooks';
import { PhoneCard } from '../../components/Card';
import { Pagination } from '../../components/Pagination';

export const PhonesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { list } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);

  const itemsPerPage = 4;
  const pageByDefault = 1;

  const [currentPage, setCurrentPage] = useState(pageByDefault);

  const firstItemIndex = itemsPerPage * (currentPage - 1);
  const lastItemIndex = currentPage === pageByDefault
    ? itemsPerPage
    : itemsPerPage * currentPage;

  const shownItems = list.slice(firstItemIndex, lastItemIndex);
  //  instead, we will make a request to the server from firstItemIndex to lastItemIndex

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };
  // should to send in helpers

  useEffect(() => {
    getPhones().then(phones => {
      dispatch(phonesActions.set(phones));
    });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Phones Page</h1>

      {shownItems.map(phone => (
        <PhoneCard
          key={phone.id}
          phone={phone}
          isInCart={cart.some(({ id }) => id === phone.id)}
          isInFavourites={favourites.includes(phone.id)}
        />
      ))}

      <Pagination
        total={list.length}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={selectPage}
      />
    </div>
  );
};
