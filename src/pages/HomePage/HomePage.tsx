import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { PagesTitle } from '../../components/PagesTitle/PagesTitle';
import { RecommededTitles } from '../../types/FeaturedPhonesTitles';

export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('https://product-page-duuh.onrender.com/phones?limit=10')
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  const startIndex = 20;
  const endIndex = 30;
  const itemsSubset = phones.slice(startIndex, endIndex + 1);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PagesTitle title='Welcome to Nice Gadgets store!'/>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
        <HomeSlider />

        <FeaturedProducts
          recommendedPhones={itemsSubset}
          title={RecommededTitles.Brand_new_models}
        />

        <FeaturedProducts
          recommendedPhones={itemsSubset}
          title={RecommededTitles.Hot_prices}
        />
      </div>
    </div>
  );
};
