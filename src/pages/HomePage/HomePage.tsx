import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { RecommededTitles } from '../../types/FeaturedPhonesTitles';
import { CategoriesSection } from
  '../../components/CategoriesSection/CategoriesSection';
import { getDiscountPhones, getNewPhones } from '../../API/FetchPhones';
import { Phones } from '../../types/Phones';
import { Loader } from '../../components/Loader/Loader';

export const HomePage: React.FC = () => {
  const [newPhones, setNewPhones] = useState<Phones[]>([]);
  const [discountPhones, setDiscountPhones] = useState<Phones[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getNewPhones(0, 20)
      .then(data => setNewPhones(data.data))
      .finally(() => setIsLoading(false));

    getDiscountPhones(0, 20)
      .then(data => setDiscountPhones(data.data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <HomeSlider />

      {isLoading
        ? <Loader />
        : <FeaturedProducts
          recommendedPhones={newPhones}
          title={RecommededTitles.Brand_new_models}
        />}


      {isLoading
        ? <Loader />
        : <FeaturedProducts
          recommendedPhones={discountPhones}
          title={RecommededTitles.Hot_prices}
        />}
    </div>
  );
};

