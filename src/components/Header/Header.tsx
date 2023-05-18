import React, { useEffect, useState } from 'react';
import styles from './Header.module.scss';

import Logo from './img/Logo.svg';
import Favorites from './img/favorites.svg';
import Cart from './img/shop_cart.svg';
import Login from './img/login.png';
import { Navigation } from '../Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import classNames from 'classnames';

export const Header: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const cartCount = useAppSelector(store => store.cart).length;
  const favouritesCount = useAppSelector(store => store.favourites).length;
  const user = useAppSelector(store => store.user);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });


  if (windowWidth < 640) {
    return (
      <header className={styles.header}>
        <div className={styles.header_container}>
          <a href='/' className={styles.header_logo_link}>
            <img src={Logo} alt={styles.header_logo} />
          </a>
        </div>

        <BurgerMenu />
      </header>
    );
  } else {
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
            <NavLink
              to={ user.googleId ? '/orders' : '/login' }
              className={({ isActive }) => classNames(
                styles.header_cart,
                {[styles.header_cart__active] : isActive}
              )}
            >
              <img src={Login} alt="Account" className={styles.login} />
            </NavLink>
          </p>

          <p className={styles.header_cart}>
            <NavLink
              to="/favourites"
              className={({ isActive }) => classNames(
                styles.header_cart,
                {[styles.header_cart__active] : isActive}
              )}
            >
              <img src={Favorites} alt="favorites" />
              {favouritesCount > 0 && (
                <div className={styles.header_quantity}>
                  {favouritesCount}
                </div>
              )}
            </NavLink>
          </p>

          <p className={styles.header_cart}>
            <NavLink
              to={'/cart'}
              className={({ isActive }) => classNames(
                styles.header_cart,
                {[styles.header_cart__active] : isActive}
              )}
            >
              <img src={Cart} alt="cart" />
              {cartCount > 0 && (
                <div className={styles.header_quantity}>
                  {cartCount}
                </div>
              )}
            </NavLink>
          </p>
        </div>
      </header>
    );
  }
};
