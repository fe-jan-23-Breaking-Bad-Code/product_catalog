import React from 'react';
import styles from './AuthenticationPage.module.scss';
import { Descope } from '@descope/react-sdk';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { syncUser } from '../../API/FetchUsers';
import { useDispatch } from 'react-redux';
import { actions as userActions } from '../../app/reducers/user';

export const AuthenticationPage: React.FC = () => {
  const navigate = useNavigate();
  // const { user, isUserLoading } = useUser();
  const [searchparams] = useSearchParams();
  const fallback = searchparams.get('fallback');

  // console.log(user); // Object with current user

  const dispatch = useDispatch();

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

          dispatch(userActions.login({
            googleId: userId,
            email,
            name,
          }));

          if (fallback !== null) {
            navigate(`/${fallback}`);
          } else {
            navigate('/orders');
          }

        }}
        onError={(err) => {
          console.log('Error!', err);
        }}
      />
    </div>
  );
};
