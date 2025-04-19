import React from 'react';
// import style from './LinkPost.module.css';
import PropTypes from 'prop-types';

export const LinkPost = ({ className, href, text }) => (
  <a className={`${className}`} href={href}>
    {text}
  </a>
);

LinkPost.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
};
