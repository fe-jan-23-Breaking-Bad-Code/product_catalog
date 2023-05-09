import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: React.FC = () => {
  const links = ['home', 'phones', 'tablets', 'accessories'];
  
  return (
    <nav>
      {links.map(link => (
        <NavLink
          to={
            link === 'home'
              ? '/'
              : `/${link}`
          }
          key={link}
        >
          {link.toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
};
