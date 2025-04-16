import React from 'react';
import style from './Main.module.css';
import { Layout } from '../Layout/Layout';

// eslint-disable-next-line arrow-body-style
export const Main = () => {
  return (
    <main className={style.main}>
      <Layout></Layout>
    </main>
  );
};
