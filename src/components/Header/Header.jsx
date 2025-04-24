import React from 'react';
import style from './Header.module.css';
import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo';
import { Heading } from './Heading/Heading';
import { Search } from './Search/Search';
import { Auth } from './Auth/Auth';
import PropTypes from 'prop-types';

export const Header = ({ token, delToken }) => (
  <header className={style.header}>
    <Layout className={style.gridContainer}>
      <Logo />
      <Heading text='Главная' />
      <Search />
      <Auth token={token} delToken={delToken} />
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
