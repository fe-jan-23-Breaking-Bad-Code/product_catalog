import React from 'react';
import styles from './PhonesPage.module.scss';
import dropdown from './dropdow.module.scss';
import { Phones } from '../../types/Phones';

type Props = {
  currentPageList: Phones[],
  onSort: (phones: Phones[]) => void;
}

export const SortingPhones: React.FC<Props> = ({
  currentPageList,
  onSort
}) => {

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    const sortedListCopy = [...currentPageList];

    switch (selectedOption) {
    case 'Newest':
      sortedListCopy.sort((a, b) => b.year - a.year);
      break;
    case 'Cheapest':
      sortedListCopy.sort((a, b) => a.price - b.price);
      break;
    case 'Most expensive':
      sortedListCopy.sort((a, b) => b.price - a.price);
      break;
    default:
      break;
    }

    onSort(sortedListCopy);
  };

  return (
    <div className={styles.sorting_container}>
      <div className={styles.sorting_container__block}>
        <p>Sorting by</p>
        <span className={`${dropdown['custom-dropdown']}`}>
          <select onChange={handleSort}>
            <option
              disabled
              selected
              style={{ display: 'none' }}
            >Select...</option>
            <option>Newest</option>
            <option>Cheapest</option>
            <option>Most expensive</option>
          </select>
        </span>
      </div>

      <div className={styles.sorting_container__block}>
        <p>Items on page</p>
        <span className={`${dropdown['custom-dropdown']}`}>
          <select onChange={handleSort}>
            <option>Sherlock Holmes</option>
            <option>The Great Gatsby</option>
            <option>V for Vendetta</option>
            <option>The Wolf of Wallstreet</option>
            <option>Quantum of Solace</option>
          </select>
        </span>
      </div>
    </div>
  );
};
