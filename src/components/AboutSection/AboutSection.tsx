/* eslint-disable max-len */
import  React  from 'react';
import { Phone } from '../../types/Phone';
import styles from './AboutSection.module.scss';

type Props = {
  phone: Phone
}

export const AboutSection:React.FC<Props> = ({ phone }) => {

  const { description } = phone;


  return (
    <div className={`${styles.about} ${styles['grid__item--desktop-1-12']} ${styles.container}`}>
      <h1 className={styles.about__title}>About</h1>
      <div className={styles.about__info}>
        <h2 className={styles['about__info--title']}>{description[0].title}</h2>
        <p className={styles['about__info--text']}>
          {description[0].text}
        </p>
      </div>

      <div className={styles.about__info}>
        <h2 className={styles['about__info--title']}>{description[1].title}</h2>
        <p className={styles['about__info--text']}>
          {description[1].text}
        </p>
      </div>

      <div className={styles.about__info}>
        <h2 className={styles['about__info--title']}>
          {description[2].title}
        </h2>
        <p className={styles['about__info--text']}>
          {description[2].text}
        </p>
      </div>

    </div>
  );
};
