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
        className={({ isActive }) => classNames(
          styles['burger-menu__footer__button'],
          styles['burger-menu__footer__button--favourites'],
          {[styles['burger-menu__footer__button--active']] : isActive}
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
        className={({ isActive }) => classNames(
          styles['burger-menu__footer__button'],
          styles['burger-menu__footer__button--cart'],
          {[styles['burger-menu__footer__button--active']] : isActive}
        )}
      >
        {cartCount > 0 && (
          <div className={styles['burger-menu__footer__quantity']}>
            {cartCount}
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default MenuFooter;
