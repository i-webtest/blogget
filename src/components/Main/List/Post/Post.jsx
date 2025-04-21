import React from 'react';
import style from './Post.module.css';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../utils/formatDate';
import { Content } from './Content/Content';
import { Rating } from './Rating/Rating';
import Date from './Date';
import { Thumbnail } from './Thumbnail/Thumbnail';
import { DeleteBtn } from './DeleteBtn/DeleteBtn';

export const Post = ({ postsData }) => {
  const { title, author, ups, date } = postsData;

  return (
    <li className={style.post}>
      <Thumbnail title={title} />

      <Content title={title} author={author} />

      <Rating ups={ups} />

      <Date dateTime={date} formatDate={formatDate(date)} />

      <DeleteBtn className={style.delete} />
    </li>
  );
};

Post.propTypes = {
  postsData: PropTypes.object,
};
