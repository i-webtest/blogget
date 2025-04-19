import React from 'react';
import style from './Main.module.css';
import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';

// eslint-disable-next-line arrow-body-style
export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <List />
      </Layout>
    </main>
  );
};
