import React from 'react';
import styles from './PhonesPage.module.scss';
import dropdown from './dropdow.module.scss';
import { Phones } from '../../types/Phones';
import { getSortedPhones } from '../../API/FetchPhones';

type Props = {
  onSort: (phones: Phones[]) => void;
  setItemsPerPage: (count: number) => void;
}

enum SortTypes {
  Newest = 'year:desc',
  Cheapest = 'price:asc',
  Alphabetically = 'name:asc',
}

export const SortingPhones: React.FC<Props> = ({
  onSort,
  setItemsPerPage,
}) => {

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as keyof typeof SortTypes;
    const sortType = SortTypes[selectedOption];

    if (sortType) {
      getSortedPhones(sortType)
        .then(sortedList => onSort(sortedList))
        .catch(error => console.error(error));
    }
  };

  const handleItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    setItemsPerPage(+selectedOption);
  };

  return (
    <div className={styles.sorting_container}>
      <div className={styles.sorting_container__block}>
        <p>Sorting by</p>
        <span className={`${dropdown['custom-dropdown']}`}>
          <select onChange={handleSort} className={`${dropdown['custom-dropdown']}`}>
            <option
              disabled
              selected
              style={{ display: 'none' }}
            >Select...</option>
            <option>Newest</option>
            <option>Cheapest</option>
            <option>Alphabetically</option>
          </select>
        </span>
      </div>

      <div className={styles.sorting_container__block}>
        <p>Items on page</p>
        <span className={`${dropdown['custom-dropdown']}`}>
          <select onChange={handleItems}>
            <option>4</option>
            <option>8</option>
            <option>16</option>
            <option>All</option>
          </select>
        </span>
      </div>

      <div className={styles.sorting_container__block}>
        <p>Search by your query</p>
        <span>
          <input type="text" className={`${dropdown['search']}`}/>
        </span>
      </div>
    </div>
  );
};
