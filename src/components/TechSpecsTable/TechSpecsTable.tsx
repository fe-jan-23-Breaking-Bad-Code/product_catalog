import React from 'react';
import styles from './TechSpecsTable.module.scss';

export const TechSpecTable = () => {
  return (
    <div className={styles.tech}>
      <h3 className={styles.tech__title}>Tech specs</h3>

      <div className={styles.tech__specs}>
        <p className={styles['tech__specs--description']}>
          Screen
        </p>

        <p className={styles['tech__specs--description']}>
          6.5” OLED
        </p>

        <p className={styles['tech__specs--description']}>
          Resolution
        </p>

        <p className={styles['tech__specs--description']}>
          2688x1242
        </p>

        <p className={styles['tech__specs--description']}>
          Processor
        </p>

        <p className={styles['tech__specs--description']}>
          Apple A12 Bionic
        </p>

        <p className={styles['tech__specs--description']}>
          RAM
        </p>

        <p className={styles['tech__specs--description']}>
          3 GB
        </p>

        <p className={styles['tech__specs--description']}>
          Built in memory
        </p>

        <p className={styles['tech__specs--description']}>
          64 GB
        </p>

        <p className={styles['tech__specs--description']}>
          Camera
        </p>

        <p className={styles['tech__specs--description']}>
          12 Mp + 12 Mp + 12 Mp
        </p>

        <p className={styles['tech__specs--description']}>
          Zoom
        </p>

        <p className={styles['tech__specs--description']}>
          Optical, 2x
        </p>

        <p className={styles['tech__specs--description']}>
          Cell
        </p>

        <p className={styles['tech__specs--description']}>
          GSM, LTE, UMTS
        </p>
      </div>
    </div>
  );
};
