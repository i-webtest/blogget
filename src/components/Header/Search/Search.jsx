/* eslint-disable max-len */
/* eslint-disable arrow-body-style */
import React from 'react';
import style from './Search.module.css';
import { ReactComponent as SearchIcon } from './img/search.svg';

export const Search = () => {
  return (
    <form className={style.form}>
      <input className={style.search} type='search' />
      <button className={style.button}>
        <SearchIcon className={style.svg} />
      </button>
    </form>
  );
};
