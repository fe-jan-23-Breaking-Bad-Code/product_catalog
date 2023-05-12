import React from 'react';
import { Phone } from '../../types/Phone';
import styles from './TechSpecsTable.module.scss';

type Props = {
  phoneTechInfo: Phone
}

export const TechSpecTable:React.FC<Props> = ({ phoneTechInfo }) => {
  const { 
    screen, 
    resolution,
    processor,
    ram,
    capacity,
    camera,
    zoom,
    cell 
  } = phoneTechInfo;

  return (
    <div className={styles.tech}>
      <h3 className={styles.tech__title}>Tech specs</h3>

      <div className={styles.tech__specs}>
        <p className={styles['tech__specs--description']}>
          Screen
        </p>

        <p className={styles['tech__specs--description']}>
          {screen}
        </p>

        <p className={styles['tech__specs--description']}>
          Resolution
        </p>

        <p className={styles['tech__specs--description']}>
          {resolution}
        </p>

        <p className={styles['tech__specs--description']}>
          Processor
        </p>

        <p className={styles['tech__specs--description']}>
          {processor}
        </p>

        <p className={styles['tech__specs--description']}>
          RAM
        </p>

        <p className={styles['tech__specs--description']}>
          {ram}
        </p>

        <p className={styles['tech__specs--description']}>
          Built in memory
        </p>

        <p className={styles['tech__specs--description']}>
          {capacity}
        </p>

        <p className={styles['tech__specs--description']}>
          Camera
        </p>

        <p className={styles['tech__specs--description']}>
          {camera}
        </p>

        <p className={styles['tech__specs--description']}>
          Zoom
        </p>

        <p className={styles['tech__specs--description']}>
          {zoom}
        </p>

        <p className={styles['tech__specs--description']}>
          Cell
        </p>

        <p className={styles['tech__specs--description']}>
          {cell}
        </p>
      </div>
    </div>
  );
};
