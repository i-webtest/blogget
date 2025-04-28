/* eslint-disable max-len */
import React, { useContext, useState } from 'react';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../UI/Text/Text';
import { urlAuth } from '../../../api/auth';
import { tokenContext } from '../../../context/tokenContext';
import { authContext } from '../../../context/authContext';

// eslint-disable-next-line arrow-body-style
export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const { auth, clearAuth } = useContext(authContext);

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`Аватарка ${auth.name}`} />
          </button>

          {logOut && (
            <button className={style.logout} onClick={logOut}>
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg} />
        </Text>
      )}
    </div>
  );
};
