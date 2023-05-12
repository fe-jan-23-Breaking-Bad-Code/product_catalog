import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.scss';
import { HomeSlider } from '../../components/HomeSlider/HomeSlider';
import { FeaturedProducts } from '../../components/FeaturedProducts';
import { Phones } from '../../types/Phones';
import  phone  from './phone.png';
import { useAppSelector } from '../../hooks';
import { getPhonesInRange } from '../../API/FetchPhones';
import { actions as phonesActions } from '../../app/reducers/phones';
import { useDispatch } from 'react-redux';



export const HomePage: React.FC = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('https://product-page-duuh.onrender.com/phones')
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      <HomeSlider />

      <FeaturedProducts recommendedPhones={phones} />
    </div>
  );
};
