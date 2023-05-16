import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './BurgerMenu.module.scss';
import classNames from 'classnames';

const MenuList: React.FC = () => {
  const burger_links = ['home', 'phones', 'tablets', 'accessories', 'login'];

  return (
    <div className={styles['burger-menu__list']}>
      {burger_links.map(link => {
        return (
          <NavLink
            to={link === 'home'
              ? '/'
              : `/${link}`
            }
            key={link}
            className={({ isActive }) => classNames(
              styles['burger-menu__link'],
              {[styles['burger-menu__link--active']] : isActive}
            )}
          >
            {link.toUpperCase()}
          </NavLink>
        );})
      }
    </div>
  );
};

export default MenuList;
