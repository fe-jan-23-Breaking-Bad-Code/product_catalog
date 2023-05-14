import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { getPhonesInRange } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useAppSelector } from '../../hooks';
import { Pagination } from '../../components/Pagination';
import { CardsGrid } from '../../components/CardsGrid';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';

export const PhonesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPageList, total } = useAppSelector(store => store.phones);

  const itemsPerPage = 8;
  const pageByDefault = 1;

  const [currentPage, setCurrentPage] = useState(pageByDefault);

  const firstItemIndex = itemsPerPage * (currentPage - 1);
  const lastItemIndex = currentPage === pageByDefault
    ? itemsPerPage
    : itemsPerPage * currentPage;

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getPhonesInRange(firstItemIndex, lastItemIndex - 1)
      .then(({ data, total }) => {
        dispatch(phonesActions.setPage({ data, total }));
      });
  }, [currentPage]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PagesTitle
          title={'Phones Page'}
        />
      </div>

      <CardsGrid productList={currentPageList} />

      <Pagination
        total={total}
        perPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={selectPage}
      />
    </div>
  );
};
