import React, { useContext } from 'react';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { Text } from '../../UI/Text/Text';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../../store/commentReducer';

export const FormComment = () => {
  const value = useSelector((state) => state.commentReducer.comment);
  const dispatch = useDispatch();

  const { auth } = useContext(authContext);

  const commentSubmit = (e) => {
    e.preventDefault();

    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={commentSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>

      <textarea className={style.textarea} value={value} onChange={handleChange}></textarea>

      <button className={style.btn}>Отправить</button>
    </form>
  );
};
