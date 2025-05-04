import { useEffect, useState } from 'react';
import { URL_API } from '../api/const';
import { useSelector } from 'react-redux';

export const usePopularPosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
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
