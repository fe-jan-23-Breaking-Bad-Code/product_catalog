import React from 'react';
import styles from './Footer.module.scss';
import Logo from '../../img/Logo.svg';

const Footer: React.FC = () => (
  <div className={styles.footer_container}>
    <footer className={`${styles.footer} ${styles.grid} ${styles['grid--desktop']} ${styles['grid--tablet']}`}>
      <div className={styles.footer__logo}>
        <a href='/' className={styles.logo}>
          <img src={Logo} alt='logo' />
        </a>
      </div>
      <div className={styles.footer__info}>
        <a
          href='https://github.com/fe-jan-23-Breaking-Bad-Code'
          className={styles.footer__info__link}
          target="_blank"
          rel="noreferrer"
        >
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
        <span
          className={styles.footer__button__text}
        >
          Back to top
        </span>
        <button
          className={styles.button_back}
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        />
      </div>
    </footer>
  </div>
);

export default Footer;
