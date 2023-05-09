import React from 'react';
import styles from './Header.module.scss';

import Logo from './img/Logo.svg';
import Favorites from './img/favorites.svg';
import Cart from './img/shop_cart.svg';

import { Navigation } from '../Navigation';


export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href='/' className={styles.header_logo_link}>
          <img src={Logo} alt={styles.header_logo} />
        </a>
        
        <Navigation />
      </div>
      
      <div className={styles.header_container}>
        <p className={styles.header_cart}>
          <a href="/" className={styles.header_cart}>
            <img src={Favorites} alt="favorites" />
          </a>
        </p>

        <p className={styles.header_cart}>
          <a href="/" className={styles.header_cart}>
            <img src={Cart} alt="cart" />
          </a>
        </p>
      </div>
    </header>
  );
};
