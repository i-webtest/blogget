import React from 'react';
import style from './Layout.module.css';

export const Layout = ({ className, children }) => {
  return className ? (
    <div className={`${style.container} ${className}`}>{children}</div>
  ) : (
    <div className={style.container}>{children}</div>
  );
};
