import React from 'react';
import styles from './BurgerMenu.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import classNames from 'classnames';

const MenuFooter: React.FC = () => {
  const cartCount = useAppSelector(store => store.cart).length;
  const favouritesCount = useAppSelector(store => store.favourites).length;
  return (
    <div className={styles['burger-menu__footer']}>
      <NavLink
        to="/favourites"
        className={classNames(
          styles['burger-menu__footer__button'],
          styles['burger-menu__footer__button--favourites']
        )}
      >
        {favouritesCount > 0 && (
          <div className={styles['burger-menu__footer__quantity']}>
            {favouritesCount}
          </div>
        )}
      </NavLink>

      <NavLink
        to="/cart"
        className={classNames(
          styles['burger-menu__footer__button'],
          styles['burger-menu__footer__button--cart']
        )}
      >
        {cartCount > 0 && (
          <div className={styles['burger-menu__footer__quantity']}>
            {cartCount}
          </div>
        )}
      </NavLink>
      {/* <a
        href='/favorites'
        className={styles['burger-menu__footer__favorite-button']}>
      </a>
      <a
        href='/shopping'
        className={styles['burger-menu__footer__shoping-button']}>
      </a> */}
    </div>
  );
};

export default MenuFooter;
