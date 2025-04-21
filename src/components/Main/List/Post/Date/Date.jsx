import React from 'react';
import style from './Date.module.css';
import PropTypes from 'prop-types';

export const Date = ({ dateTime, formatDate }) => (
  <time className={style.date} dateTime={dateTime}>
    {formatDate}
  </time>
);

Date.propTypes = {
  dateTime: PropTypes.string,
  formatDate: PropTypes.object,
};
