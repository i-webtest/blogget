import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
// import { formatDate } from '../../../../utils/formatDate';
import { Content } from './Content/Content';
import { Rating } from './Rating/Rating';
import Date from './Date';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { DeleteBtn } from './DeleteBtn/DeleteBtn';

export const Post = ({ postData }) => {
  console.log('postData: ', postData);

  const { thumbnail, title, author, ups, created } = postData;
  console.log('date: ', created);

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title} />

      <Content title={title} author={author} />

      <Rating ups={ups} />

      <Date date={created} />

      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
