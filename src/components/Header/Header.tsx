import React from 'react';
import { Navigation } from '../Navigation';
import BurgerMenu from '../BurgerMenu/BurgerMenu';


export const Header: React.FC = () => {
  return (
    <header>
      <Navigation />
      <BurgerMenu />
    </header>
  );
};
