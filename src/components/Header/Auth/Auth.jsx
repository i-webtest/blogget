/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';
import { Text } from '../../UI/Text/Text';
import { urlAuth } from '../../../api/auth';
import { URL_API } from '../../../api/const';

// eslint-disable-next-line arrow-body-style
export const Auth = ({ token, delToken }) => {
  const [auth, setAuth] = useState({});
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          localStorage.removeItem('bearer');
          return;
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({ name, img });
      })
      .catch((error) => {
        console.error(error);
        setAuth({});
        delToken();
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn} onClick={() => setLogout(!logout)}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`Аватарка ${auth.name}`} />
          </button>

          {logout && (
            <button className={style.logout} onClick={() => delToken()}>
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
