import { useContext, useEffect, useState } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL_API } from '../api/const';

export const usePopularPosts = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const postsData = data.children;
        setPosts(postsData);
      })
      .catch((err) => {
        console.error('Ошибка: ', err);
      });
  }, [token]);

  return [posts];
};
