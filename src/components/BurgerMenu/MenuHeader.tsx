import React from 'react';
import Logo from '../../img/Logo.svg';
import styles from './BurgerMenu.module.scss';

type Props = {
  handleMenuClick: () => void;
}

const MenuHeader: React.FC<Props> = ({ handleMenuClick }) => (
  <div className={styles['burger-menu__header']}>
    <div className={styles['burger-menu__header__logo']}>
      <img src={Logo} alt="Logo" />
    </div>
    <button 
      className={styles['burger-close']}
      onClick={handleMenuClick}>
    </button>
  </div>
);

export default MenuHeader;