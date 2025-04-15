import React from 'react';
import style from './Header.module.css';
import { Layout } from '../Layout/Layout';
import { Logo } from './Logo/Logo';
import { Heading } from './Heading/Heading';
import { Search } from './Search/Search';
import { Auth } from './Auth/Auth';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout className={style.gridContainer}>
        <Logo />
        <Heading text='Главная' />
        <Search />
        <Auth auth={false} />
      </Layout>
    </header>
  );
};
