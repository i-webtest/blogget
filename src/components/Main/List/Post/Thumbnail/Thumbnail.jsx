import React from 'react';
import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({ thumbnail, title }) => {
  let imgUrl = notphoto;

  if (imgUrl.includes('http')) {
    imgUrl = thumbnail;
  }

  return <img className={style.img} src={imgUrl} alt={title} />;
};

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
