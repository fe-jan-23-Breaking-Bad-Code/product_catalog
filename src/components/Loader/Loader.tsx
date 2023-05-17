import React from 'react';
import { Oval } from  'react-loader-spinner';

import styles from './Loader.module.scss';

export const Loader = () => (
  <div className={styles.loader__container}>
    <Oval
      height={50}
      width={50}
      color = '#000'
      secondaryColor="#aaa"
    />
  </div>
);
