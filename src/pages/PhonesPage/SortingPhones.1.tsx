import React, { useState } from 'react';
import styles from './PhonesPage.module.scss';
import dropdown from './dropdow.module.scss';
import { Phones } from '../../types/Phones';


type Props = {
  total: number,
  searchQuery: string,
  sortedType: string,
  itemsPerPage: number,
  onSort: (query: string) => void;
  setItemsPerPage: (count: number) => void;
  setSearchQuery: (query: string) => void;
}

enum SortTypes {
  Newest = 'year:desc',
  Cheapest = 'price:asc',
  Alphabetically = 'name:asc',
}

export const SortingPhones: React.FC<Props> = ({
  total,
  searchQuery,
  sortedType,
  itemsPerPage,
  onSort,
  setItemsPerPage,
  setSearchQuery,
}) => {
  const [currentQuery, setCurrentQuery] = useState<string>(searchQuery);

  const typeAll = {
    '4': 5,
    '8': 9,
    '16': 17,
    'All': total + 1,
  };

  const indexOfType = Object.values(SortTypes).indexOf(sortedType as SortTypes);
  const key = Object.keys(SortTypes)[indexOfType];
  const indexOfTypeAll = Object.values(typeAll).indexOf(itemsPerPage);
  const keyItems = Object.keys(typeAll)[indexOfTypeAll];

  // console.log(itemsPerPage);
  // console.log(typeAll['All']);
  // console.log(indexOfTypeAll);
  // console.log(keyItems);

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as keyof typeof SortTypes;
    const sortType = SortTypes[selectedOption];

    if (sortType) {
      onSort(sortType);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setSearchQuery(currentQuery);
    }
  };

  const handleClick = () => {
    setSearchQuery(currentQuery);
  };

  const handleReset = () => {
    setCurrentQuery('');
    setSearchQuery('');
  };


  const handleItems = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'All') {
      setItemsPerPage(total + 1);
    } else {
      setItemsPerPage(+selectedOption + 1);
    }
  };

  return (
    <div className={styles.sorting_container}>
      <div className={styles.sorting_container__block}>
        <p>Sorting by</p>
        <span className={`${dropdown['custom-dropdown']}`}>
          <select
            value={key}
            onChange={handleSort}
            className={`${dropdown['custom-dropdown']}`}
          >
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
          <select value={keyItems} onChange={handleItems}>
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
          <input
            type="text"
            value={currentQuery}
            placeholder='Your search'
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className={`${dropdown['search']}`}/>

        </span>
      </div>
      <div className={styles.sorting_container__block}>
        <button
          className={styles.searchButton}
          onClick={handleClick}
        >
          Search
        </button>
      </div>

      <div className={styles.sorting_container__block}>
        <button
          className={styles.searchButton}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};
