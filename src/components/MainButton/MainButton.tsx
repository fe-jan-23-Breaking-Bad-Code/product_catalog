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
  isSelected: boolean
}

export const MainButton: React.FC<Props> = ({
  content,
  handler,
  isSelected,
}) => {
  return (
    <button
      className={classNames(
        styles['main-button'],
        { [styles['main-button--selected']]: isSelected }
      )}
      onClick={handler}
    >
      {content}
    </button>
  );
};
