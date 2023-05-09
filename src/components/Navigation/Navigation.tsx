import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import styles from './Navigation.module.scss';

export const Navigation: React.FC = () => {
  const links = ['home', 'phones', 'tablets', 'accessories'];
  
  return (
    <nav className={styles.nav}>
      {links.map(link => (
        <NavLink
          to={link === 'home'
            ? '/'
            : `/${link}`
          }
          key={link}
          className={({ isActive }) => classNames(
            styles.nav_link,
            {[styles.nav_link__active] : isActive}
          )}
        >
          {link.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};
