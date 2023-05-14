import React from 'react';
import styles from './PagesTitle.module.scss';

type Props = {
 title: string;
 
}

export const PagesTitle:React.FC<Props> = ({ title}) => {
  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  );
};
