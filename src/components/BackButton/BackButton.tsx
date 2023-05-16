import React from 'react';
import styles from './BackButton.module.scss';
import Vector from '../../img/vector-left.svg';

export const BackButton = () => (
  <p 
    className={`${styles.link} ${styles['grid__item--desktop-1-2']} ${styles['grid__item--tablet-1-2']}`} 
    onClick={() => window.history.go(-1)}
  >
    <img className={styles.vector} src={Vector} alt="Back" />
    <p className={styles.title}>
        Back
    </p>
  </p>
);
