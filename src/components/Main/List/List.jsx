import React, { useContext } from 'react';
import style from './List.module.css';
import { Post } from './Post/Post';
import { postsContext } from '../../../context/postsContext';
import { Text } from '../../UI/Text/Text';

export const List = () => {
  const { posts } = useContext(postsContext);

  return (
    <ul className={style.list}>
      {posts.length ? (
        posts.map(({ data: postData }) => <Post key={postData.id} postData={postData} />)
      ) : (
        <Text As='p'>Постов не найдено</Text>
      )}
    </ul>
  );
};
