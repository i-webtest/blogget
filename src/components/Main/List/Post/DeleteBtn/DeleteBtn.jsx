import React from 'react';
// import style from './DeleteBtn.module.css';
import PropTypes from 'prop-types';

import { ReactComponent as DeleteIcon } from './img/delete.svg';

export const DeleteBtn = ({ className }) => (
  <button className={className}>
    <DeleteIcon />
  </button>
);

DeleteBtn.propTypes = {
  className: PropTypes.string,
};
