import style from './Main.module.css';
import { Layout } from '../Layout/Layout';
import { Tabs } from './Tabs/Tabs';
import { List } from './List/List';
import { Route, Routes } from 'react-router';
import { Modal } from '../Modal/Modal';
import { MainPage } from './MainPage/MainPage';
import { ErrorPage } from './ErrorPage/ErrorPage';

export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  </main>
);
