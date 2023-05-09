import React from 'react';
import { NavLink } from 'react-router-dom';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

export const Navigation: React.FC = () => (
  <nav>
    <div className="container">
      <div>
        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/phones">
          Phones
        </NavLink>
      </div>
    </div>
  </nav>
);