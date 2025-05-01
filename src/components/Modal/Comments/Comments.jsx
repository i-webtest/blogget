import React from 'react';
import style from './Comments.module.css';
import { Text } from '../../UI/Text/Text';
import Date from '../../Main/List/Post/Date';
import formatDate from '../../../utils/formatDate';
import PropTypes from 'prop-types';

export const Comments = ({ comments }) => {
  console.log('comments: ', comments);

  return (
    <ul className={style.list}>
      {comments.length ? (
        comments.map(({ id, author, body, created: date }) => {
          if (body) {
            return (
              <li key={id} className={style.item}>
                <Text As='h3' className={style.author} size={18} tsize={22}>
                  {author}
                </Text>

                <Text As='p' className={style.comment} size={14} tsize={18}>
                  {body}
                </Text>

                <Date date={date.length ? formatDate(date) : date} />
              </li>
            );
          }
        })
      ) : (
        <Text As='p'>Нет комментариев</Text>
      )}
    </ul>
  );
};

Comments.propTypes = {
  comments: PropTypes.array,
};
