import React, { useEffect, useState } from 'react';
import styles from './PhonesPage.module.scss';
import { getPhonesInRange } from '../../API/FetchPhones';
import { useDispatch } from 'react-redux';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useAppSelector } from '../../hooks';
import { Pagination } from '../../components/Pagination';
import { CardsGrid } from '../../components/CardsGrid';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { BreadCrumb } from '../../components/BreadCrumb/BreadCrumb';
import { Loader } from '../../components/Loader/Loader';
import classNames from 'classnames';
import { SortingPhones } from './SortingPhones.1';

export const PhonesPage: React.FC = () => {
  const dispatch = useDispatch();
  const { currentPageList, total } = useAppSelector(store => store.phones);
  const pageByDefault = 1;

  const [currentPage, setCurrentPage] = useState(pageByDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [sortedList, setSortedList] = useState(currentPageList);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  const firstItemIndex = itemsPerPage * (currentPage - 1);
  const lastItemIndex = currentPage === pageByDefault
    ? itemsPerPage
    : itemsPerPage * currentPage;

  console.log(firstItemIndex, lastItemIndex);

  const selectPage = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setIsLoading(true);

    getPhonesInRange(firstItemIndex, lastItemIndex - 1)
      .then(({ data, total }) => {
        dispatch(phonesActions.setPage({ data, total }));
      })
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  useEffect(() => {
    setSortedList(currentPageList);
  }, [currentPageList]);

  const breadcrumbs = [
    { path: '/phones', title: 'Phones' },
  ];

  return (
    <div
      className={classNames(
        styles.container,
        styles.page__container,
      )}
    >
      <BreadCrumb items={breadcrumbs} />

      <div className={styles.phones__title}>
        <PagesTitle
          title={'Phones Page'}
        />
      </div>

      {isLoading
        ? <Loader />
        : (
          <>
            <div className={styles.models_count}>
              {`${total} models`}
            </div>

            <SortingPhones
              onSort={setSortedList}
              setItemsPerPage={setItemsPerPage}
            />

            <CardsGrid productList={sortedList} />

            <Pagination
              total={total}
              perPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={selectPage}
            />
          </>
        )
      }
    </div>
  );
};
