import React from 'react';
import './styles/main.scss';
import Logo from '../../img/Logo.svg';
import Button from '../../img/button.png';

const Footer: React.FC = () => (
  <footer className='footer'>
    <div className='footer_logo'>
      <a href='/' className='logo'>
        <img src={Logo} alt='logo' />
      </a>
    </div>
    
    <div className='footer_info'>
      <a href='/' className='footer_info__link'>
        Github
      </a>
      
      <a href='/' className='footer_info__link'>
        Contacts
      </a>
      
      <a href='/' className='footer_info__link'>
        Rights
      </a>
    </div>
    
    <div className='footer_button'>
      <a href='/'>Back to top</a>
      
      <button className='button-back'>
        <img src={Button} alt="Go to top" />
      </button>
    </div>
  </footer>
);

export default Footer;
