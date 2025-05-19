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
import { Preloader } from '../UI/Preloader/Preloader';
import { useNavigate, useParams } from 'react-router';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const [post, comments, status] = useCommentsData(id);
  console.log('post: ', post);

  const handleClick = (e) => {
    const target = e.target;

    if (target === overlayRef.current || target.closest(`.${style.close}`)) {
      navigate(`/category/${page}`);
    }
  };

  const handleClickEscape = (e) => {
    if (e.key === 'Escape') {
      navigate(`/category/${page}`);
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
        {status === 'loading' && <Preloader size={100} />}
        {status === 'error' && 'Ошибка'}
        {status === 'loaded' && (
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

            <Comments comments={comments} />
          </>
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
