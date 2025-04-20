import React from 'react';
import style from './List.module.css';
import { Post } from './Post/Post';

export const List = () => {
  const postsData = [
    {
      id: '',
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
    },
    {
      id: '',
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 32,
      date: '2022-02-20T14:10:00.000Z',
    },
    {
      id: '',
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 54,
      date: '2022-01-17T00:27:00.000Z',
    },
    {
      id: '',
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 77,
      date: '2022-03-01T11:55:00.000Z',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postsData, index) => (
        <Post key={index} postsData={postsData} />
      ))}
    </ul>
  );
};
