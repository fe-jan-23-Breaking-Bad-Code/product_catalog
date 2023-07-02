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
  const [isNewPhonesLoading, setIsNewPhonesLoading] = useState(false);
  const [isDiscountPhonesLoading, setIsDiscountPhonesLoading] = useState(false);

  useEffect(() => {
    setIsNewPhonesLoading(true);

    getNewPhones(0, 20)
      .then(data => setNewPhones(data.data))
      .finally(() => setIsNewPhonesLoading(false));

    getDiscountPhones(0, 20)
      .then(data => setDiscountPhones(data.data))
      .finally(() => setIsDiscountPhonesLoading(false));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <HomeSlider />

      <div className={styles.block}>
        {isNewPhonesLoading
          ? (
            <FeaturedProducts
              title={RecommededTitles.Brand_new_models}
              skeletonCount={10}
            />
          )
          : (
            <FeaturedProducts
              recommendedPhones={newPhones}
              title={RecommededTitles.Brand_new_models}
            />
          )
        }

        <CategoriesSection />

        {isDiscountPhonesLoading
          ? (
            <FeaturedProducts
              title={RecommededTitles.Hot_prices}
              skeletonCount={10}
            />
          )
          : (
            <FeaturedProducts
              recommendedPhones={discountPhones}
              title={RecommededTitles.Hot_prices}
            />
          )
        }
      </div>
    </div>
  );
};

