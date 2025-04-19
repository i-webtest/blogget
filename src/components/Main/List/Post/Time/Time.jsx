import React from 'react';
// import style from './Time.module.css';
import PropTypes from 'prop-types';

export const Time = ({ className, dateTime, formatDate }) => (
  <time className={className} dateTime={dateTime}>
    {formatDate}
  </time>
);

Time.propTypes = {
  className: PropTypes.string,
  dateTime: PropTypes.string,
  formatDate: PropTypes.object,
};
