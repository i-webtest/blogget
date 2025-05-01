import React from 'react';
import style from './Thumbnail.module.css';
import notphoto from './img/notphoto.jpg';
import PropTypes from 'prop-types';

export const Thumbnail = ({ thumbnail, title }) => (
  <img className={style.img} src={thumbnail === 'self' ? notphoto : thumbnail} alt={title} />
);

Thumbnail.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};
