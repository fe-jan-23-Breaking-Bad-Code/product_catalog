import React from 'react';
import styles from './MainButton.module.scss';
import classNames from 'classnames';

export interface ImageProps {
  src: string;
  alt: string;
}

type Props = {
  content: string;
  handler: () => void;
  isSelected: boolean;
  isSkeleton?: boolean;
}

export const MainButton: React.FC<Props> = ({
  content,
  handler,
  isSelected,
  isSkeleton=false,
}) => {
  return (
    <button
      className={classNames(
        styles['main-button'],
        {
          [styles['main-button--selected']]: isSelected,
          'placeholder': isSkeleton,
        }
      )}
      onClick={handler}
      disabled={isSkeleton}
    >
      {content}
    </button>
  );
};
