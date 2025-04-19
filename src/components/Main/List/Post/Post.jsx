import React from 'react';
import style from './Post.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../utils/formatDate';
import { LinkPost } from './LinkPost/LinkPost';
import { PostButton } from './PostButton/PostButton';
import { Time } from './Time/Time';
import { PostWrapper } from './PostWrapper/PostWrapper';

export const Post = ({ postData }) => {
  const { title, author, ups, date } = postData;

  return (
    <li className={style.post}>
      <img className={style.img} src={notphoto} alt={title} />

      <PostWrapper className={style.content}>
        <h2 className={style.title}>
          <LinkPost className={style.linkPost} href='#post' text={title} />
        </h2>

        <LinkPost className={style.linkAuthor} href='#author' text={author} />
      </PostWrapper>

      <PostWrapper className={style.rating}>
        <PostButton className={style.up} ariaLabel='Повысить рейтинг' />
        <p className={style.ups}>{ups}</p>
        <PostButton className={style.down} ariaLabel='Понизить рейтинг' />
      </PostWrapper>

      <Time className={style.date} dateTime={date} formatDate={formatDate(date)} />
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
