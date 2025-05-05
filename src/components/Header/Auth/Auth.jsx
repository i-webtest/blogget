/* eslint-disable max-len */
import React, { useState } from 'react';
import style from './Auth.module.css';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../UI/Text/Text';
import { urlAuth } from '../../../api/auth';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import { Preloader } from '../../UI/Preloader/Preloader';

// eslint-disable-next-line arrow-body-style
export const Auth = () => {
  const dispatch = useDispatch();
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader size={30} />
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`Аватарка ${auth.name}`} />
          </button>

          {showLogout && (
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
