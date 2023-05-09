import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../img/Logo.svg';
import Vector from '../img/vector-top.svg';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__logo}>
      <a href='/' className={styles.logo}>
        <img src={Logo} alt='logo' />
      </a>
    </div>
    <div className={styles.footer__info}>
      <a href='/' className={styles.footer__info__link}>
        Github
      </a>
      <a href='/' className={styles.footer__info__link}>
        Contacts
      </a> 
      <a href='/' className={styles.footer__info__link}>
        Rights
      </a>
    </div>
    <div className={styles.footer__button}>
      <a href='/' className={styles.footer__button__text}>Back to top</a>
      <button className={styles.button_back}>
        <img src={Vector} alt="Go to top" />
      </button>
    </div>
  </footer>
);

export default Footer;