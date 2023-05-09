import { FC } from 'react';

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

  return (
    <ul className="pagination">
      <li>
        <a
          href="#prev"
          aria-disabled={isFirstPage}
          onClick={handlePrev}
        >
          «
        </a>
      </li>

      {pages.map((page => (
        <li>  
          <a
            href={`#${page}`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </a>
        </li>
      )))}

      <li>
        <a
          href="#next"
          aria-disabled={isLastPage}
          onClick={handleNext}
        >
          »
        </a>
      </li>
    </ul>
  );
};