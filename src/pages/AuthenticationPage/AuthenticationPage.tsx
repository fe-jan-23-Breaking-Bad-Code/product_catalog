import React from 'react';
import styles from './AuthenticationPage.module.scss';
import { Descope } from '@descope/react-sdk';
import { useNavigate } from 'react-router-dom';
import { syncUser } from '../../API/FetchUsers';

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
          const {
            userId,
            name,
            email,
          } = e.detail.user;

          syncUser({
            googleId: userId,
            email,
            name,
          });

          navigate('/orders');
        }}
        onError={(err) => {
          console.log('Error!', err);
        }}
      />
    </div>
  );
};
