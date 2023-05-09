import React, { useState } from 'react';
import styles from './BurgerMenu.module.scss';

import MenuList from './MenuList';
import MenuHeader from './MenuHeader';
import MenuFooter from './MenuFooter';

const BurgerMenu: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const handleMenuClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button 
        className={styles['burger-button']}
        onClick={handleMenuClick}>
      </button>
      <div 
        className={`
          ${styles['burger-menu']} 
          ${isActive ? styles.active : ''}
        `}
        onClick={handleMenuClick}
      >
        <MenuHeader handleMenuClick={handleMenuClick} />
        <MenuList />
        <MenuFooter />
      </div>
    </>
  );
};

export default BurgerMenu;