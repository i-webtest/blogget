import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';

// eslint-disable-next-line arrow-body-style
export const Layout = ({ className, children }) => {
  return className ? (
    <div className={`${style.container} ${className}`}>{children}</div>
  ) : (
    <div className={style.container}>{children}</div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
};
