import React, { useState } from 'react';
import styles from './AuthenticationPage.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type Props = {
  title: string,
  typeSign: string,
  description: string,
  typeToAuth: string,
}

export const AuthenticationPage: React.FC<Props> = ({
  title,
  typeSign,
  description,
  typeToAuth,
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className={styles.page__container}>
      <div className={styles.header} >
        <div className={styles.title}>
          {title}
        </div>
      </div>
      <form action="/" method='POST' className={styles.registration}>

        <div className={styles.registration__field}>
          <label htmlFor="email">Email:</label>
          <div className={`${styles['registration__field--container']}`}>
            <input
              type="email"
              id="email"
              name="email"
              className={`${styles['registration__field--input']}`}
              required
            />
          </div>
        </div>

        <div className={styles.registration__field}>
          <label htmlFor="password">Password:</label>
          <div className={`${styles['registration__field--container']}`}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              id="password"
              name="password"
              className={`${styles['registration__field--input']}`}
              required
            />

            <div
              className={
                classNames(passwordVisible
                  ? styles.eye_icon
                  : styles.eye_icon__close)
              }
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          </div>
        </div>

        <button type="submit" className={styles.registration__button}>
          {typeSign}
        </button>
        <Link
          to={`/${typeToAuth}`}
          className={styles.link}
        >
          {description}
        </Link>
      </form>
    </div>
  );
};
