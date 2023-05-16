import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { RecommededTitles } from '../../types/FeaturedPhonesTitles';
import { CategoriesSection } from
  '../../components/CategoriesSection/CategoriesSection';
import { getNewModels } from '../../API/FetchPhones';
import { Phones } from '../../types/Phones';

export const HomePage: React.FC = () => {
  const [newModels, setNewModels] = useState<Phones[]>([]);
  const [hotPrices, setHotPrices] = useState<Phones[]>([]);

  useEffect(() => {
    getNewModels(0, 7)
      .then(responce => {
        setNewModels(responce.data);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <HomeSlider />

      <FeaturedProducts
        recommendedPhones={newModels}
        title={RecommededTitles.Brand_new_models}
      />

      <CategoriesSection />

      <FeaturedProducts
        recommendedPhones={newModels}
        title={RecommededTitles.Hot_prices}
      />
    </div>
  );
};

