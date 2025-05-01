import React, { useContext, useRef } from 'react';
import style from './FormComment.module.css';
import { authContext } from '../../../context/authContext';
import { Text } from '../../UI/Text/Text';

export const FormComment = () => {
  const { auth } = useContext(authContext);
  const textareaRef = useRef(null);
  console.log('textareaRef: ', textareaRef);

  const commentSubmit = (e) => {
    e.preventDefault();

    console.log(textareaRef.current.value);
    textareaRef.current.value = '';
  };

  return (
    <form className={style.form} onSubmit={commentSubmit}>
      <Text As='h3' size={14} tsize={18}>
        {auth.name}
      </Text>

      <textarea className={style.textarea} ref={textareaRef}></textarea>

      <button className={style.btn}>Отправить</button>
    </form>
  );
};
