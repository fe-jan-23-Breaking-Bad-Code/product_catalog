import React from 'react';
import styles from './BurgerMenu.module.scss';

const MenuList: React.FC = () => (
  <ul className={styles['burger-menu__list']}>
    <li className={styles['burger-menu__link']}>
      <a 
        href="#"
        className={styles['burger-menu__link__text']}
      >
        Home
      </a>
    </li>
    <li className={styles['burger-menu__link']}>
      <a 
        href="#"
        className={styles['burger-menu__link__text']}
      >
        Phones
      </a>
    </li>
    <li className={styles['burger-menu__link']}>
      <a 
        href="#"
        className={styles['burger-menu__link__text']}
      >
        Tablets
      </a>
    </li>
    <li className={styles['burger-menu__link']}>
      <a 
        href="#"
        className={styles['burger-menu__link__text']}
      >
        Accessories
      </a>
    </li>
  </ul>
);

export default MenuList;