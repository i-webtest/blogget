import React from 'react';
// import style from './PostWrapper.module.css';
import PropTypes from 'prop-types';

export const PostWrapper = ({ className, children }) => <div className={className}>{children}</div>;

PostWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object, PropTypes.array]),
};
