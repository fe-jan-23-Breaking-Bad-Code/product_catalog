import React from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';

export const HomePage: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <PagesTitle title='Welcome to Nice Gadgets store!'/>
    </div>

    <HomeSlider />
  </div>
);
