import React, { useEffect, useState } from 'react';
import { getPhonesInRange } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useAppSelector } from '../../hooks';
import { PhoneCard } from '../../components/Card';
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';

export const PhonesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPageList, total } = useAppSelector(store => store.phones);
  const favourites = useAppSelector(store => store.favourites);
  const cart = useAppSelector(store => store.cart);
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');

  console.log(cart);

  const itemsPerPage = 4;
  const pageByDefault = Number(page) || 1;

  const [currentPage, setCurrentPage] = useState(pageByDefault);

  const firstItemIndex = itemsPerPage * (currentPage - 1);
  const lastItemIndex = currentPage === pageByDefault
    ? itemsPerPage
    : itemsPerPage * currentPage;

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPhonesInRange(firstItemIndex, lastItemIndex)
      .then(({ data, total }) => {
        dispatch(phonesActions.setPage({ data, total }));
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Phones Page</h1>

      {currentPageList.map(phone => (
        <PhoneCard
          key={phone.id}
          phone={phone}
          isInCart={cart.some(({ id }) => id === phone.id)}
          isInFavourites={favourites.includes(phone.id)}
        />
      ))}

      <Pagination
        total={total}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={selectPage}
      />
    </div>
  );
};
