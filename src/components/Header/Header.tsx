import React from 'react';

import Logo from '../../img/Logo.svg';
import Favorites from '../../img/header/favorites.svg';
import Cart from '../../img/header/shop_cart.svg';

import { Navigation } from '../Navigation';


export const Header: React.FC = () => {
  return (
    <header>
      <a href='/' className='logo'>
        <img src={Logo} alt='logo' />
      </a>
      
      <Navigation />
      
      <div>
        <a href="/">
          <img src={Favorites} alt="favorites"/>
        </a>
        
        <a href="/">
          <img src={Cart} alt="cart"/>
        </a>
      </div>
    </header>
  );
};
