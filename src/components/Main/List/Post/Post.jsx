import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import { Content } from './Content/Content';
import { Rating } from './Rating/Rating';
import Date from './Date';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { DeleteBtn } from './DeleteBtn/DeleteBtn';

export const Post = ({ postData }) => {
  console.log('postData: ', postData);

  const { id, thumbnail, title, author, ups, selftext: markdown, created } = postData;

  return (
    <li className={style.post}>
      <Thumbnail thumbnail={thumbnail} title={title} />

      <Content title={title} author={author} markdown={markdown} id={id} />

      <Rating ups={ups} />

      <Date date={created} />

      <DeleteBtn />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
