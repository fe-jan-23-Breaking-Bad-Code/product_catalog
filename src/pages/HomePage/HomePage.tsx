import React from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';

export const HomePage: React.FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>

    <HomeSlider />
  </div>
);
