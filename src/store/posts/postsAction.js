import axios from 'axios';
import { URL_API } from '../../api/const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk('posts/fetch', (newPage, { getState }) => {
  let page = getState().posts.page;

  if (newPage) {
    page = newPage;
  }

  const token = getState().tokenReducer.token;
  const posts = getState().posts.posts;
  const after = getState().posts.after;
  const isLast = getState().posts.isLast;

  if (!token || isLast) return;

  return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({ data: { data } }) => {
      let newPosts = data.children;

      if (after) {
        newPosts = [...posts, ...newPosts];
      }
      return {
        posts: newPosts,
        after: data.after,
        page,
      };
    })
    .catch((error) => {
      console.error('Ошибка: ', error);
      return { error: error.toString() };
    });
});
