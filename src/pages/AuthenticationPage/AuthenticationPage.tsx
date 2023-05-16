import React from 'react';
import styles from './AuthenticationPage.module.scss';
import { Descope, useUser } from '@descope/react-sdk';
import { useNavigate } from 'react-router-dom';

export const AuthenticationPage: React.FC = () => {
  const navigate = useNavigate();
  // const { user, isUserLoading } = useUser();

  // console.log(user); // Object with current user

  return (
    <div className={styles.page__container}>
      <Descope
        flowId="sign-up-or-in"
        theme="light"
        onSuccess={(e) => {
          console.log(e.detail.user.name);
          console.log(e.detail.user.email);
          console.log(e.detail.user.userId);
          navigate('/');
        }}
        onError={(err) => {
          console.log('Error!', err);
        }}
      />
    </div>
  );
};
