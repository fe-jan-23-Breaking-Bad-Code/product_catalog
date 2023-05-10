import React, { FC, useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { ImageProps, PaginationButton } from '../PaginationButton';

import nextPageIcon from './images/nextPage.svg';
import nextPageIconDisabled from './images/nextPageDisabled.svg';

import prevPageIcon from './images/prevPage.svg';
import prevPageIconDisabled from './images/prevPageDisabled.svg';

interface Props {
  total: number,
  perPage: number,
  currentPage: number,
  onPageChange: (page: number) => void
}

//should to separete to helpers
function getNumbers(from: number, to: number): number[] {
  const numbers = [];

  for (let n = from; n <= to; n += 1) {
    numbers.push(n);
  }

  return numbers;
}

export const Pagination: FC<Props> = (props) => {
  const {
    total,
    perPage,
    currentPage,
    onPageChange,
  } = props;

  const [nextPage, setNextPage] = useState(nextPageIcon);
  const [prevPage, setPrevPage] = useState(prevPageIconDisabled);

  const pagesCount = Math.ceil(total / perPage);
  const pages = getNumbers(1, pagesCount);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pagesCount;

  const handleNext = () => {
    if (isLastPage) {
      return;
    }

    onPageChange(currentPage + 1);
  };

  const handlePrev = () => {
    if (isFirstPage) {
      return;
    }

    onPageChange(currentPage - 1);
  };

  useEffect(() => {
    if (currentPage !== 1) {
      setPrevPage(prevPageIcon);
    } else {
      setPrevPage(prevPageIconDisabled);
    }

    if (currentPage === pagesCount) {
      setNextPage(nextPageIconDisabled);
    } else {
      setNextPage(nextPageIcon);
    }
  }, [currentPage, pagesCount]);

  const prevPaginationPage: ImageProps = {
    src: prevPage,
    alt: 'Previous page in pagination',
  };

  const nextPaginationPage: ImageProps = {
    src: nextPage,
    alt: 'Next page in pagination',
  };

  return (
    <ul className={styles.pagination}>
      <li className={styles.pagination_item}>
        <a
          href="#prev"
          aria-disabled={isFirstPage}
          onClick={handlePrev}
          className={styles.pagination_link}
        >
          <PaginationButton
            image={prevPaginationPage}
            currentPage={currentPage}
            isDisabled={isFirstPage}
          />
        </a>
      </li>

      {pages.map((page => (
        <li
          className={styles.pagination_item}
          key={page}
        >
          <a
            href={`#${page}`}
            onClick={() => onPageChange(page)}
            className={styles.pagination_link}
          >
            <PaginationButton
              page={page}
              currentPage={currentPage}
            />
          </a>
        </li>
      )))}

      <li className={styles.pagination_item}>
        <a
          href="#next"
          aria-disabled={isLastPage}
          onClick={handleNext}
          className={styles.pagination_link}
        >
          <PaginationButton
            image={nextPaginationPage}
            currentPage={currentPage}
            isDisabled={isLastPage}
          />
        </a>
      </li>
    </ul>
  );
};
