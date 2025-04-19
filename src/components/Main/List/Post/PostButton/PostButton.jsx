import React from 'react';
// import style from './PostButton.module.css';
import PropTypes from 'prop-types';

export const PostButton = ({ className, ariaLabel }) => <button className={className} aria-label={ariaLabel} />;

PostButton.propTypes = {
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
};
