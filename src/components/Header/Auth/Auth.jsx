/* eslint-disable max-len */
import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as LoginIcon } from './img/login.svg';

// eslint-disable-next-line arrow-body-style
export const Auth = ({ auth }) => {
  return <button className={style.button}>{auth ? auth : <LoginIcon className={style.svg} />}</button>;
};

Auth.propTypes = {
  auth: PropTypes.node,
};
