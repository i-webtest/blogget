import React, { useEffect, useRef } from 'react';
import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import { Text } from '../UI/Text/Text';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Comments } from './Comments/Comments';
import { FormComment } from './FormComment/FormComment';

export const Modal = ({ id, closeModal }) => {
  console.log('id: ', id);
  const overlayRef = useRef(null);
  const [commentsData] = useCommentsData(id);
  // const [post, comments] = commentsData;
  const [post] = commentsData;

  const handleClick = (e) => {
    const target = e.target;

    if (target === overlayRef.current || target.closest(`.${style.close}`)) {
      closeModal();
    }
  };

  const handleClickEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keyup', handleClickEscape);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keyup', handleClickEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {post ? (
          <>
            <Text As='h2' className={style.title}>
              {post.title}
            </Text>

            <div className={style.content}>
              <Markdown
                options={{
                  overrides: {
                    a: {
                      props: {
                        target: '_blank',
                      },
                    },
                  },
                }}
              >
                {post.selftext}
              </Markdown>
            </div>

            <Text As='p' className={style.author}>
              {post.author}
            </Text>

            <FormComment />

            <Comments comments={post} />
          </>
        ) : (
          <Text As='p' bold dsize={18}>
            Загрузка...
          </Text>
        )}

        <button className={style.close} ref={overlayRef}>
          <CloseIcon />
        </button>
      </div>
    </div>,

    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func,
  id: PropTypes.string,
};
