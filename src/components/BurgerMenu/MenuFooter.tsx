import React from 'react';
import styles from './BurgerMenu.module.scss';

const MenuFooter: React.FC = () => (
  <div className={styles['burger-menu__footer']}>
    <a 
      href='/favorites' 
      className={styles['burger-menu__footer__favorite-button']}>
    </a>
    <a 
      href='/shopping' 
      className={styles['burger-menu__footer__shoping-button']}>
    </a>
  </div>
);

export default MenuFooter;