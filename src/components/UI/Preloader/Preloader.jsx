import { RingLoader } from 'react-spinners';
import PropTypes from 'prop-types';

export const Preloader = ({ size }) => (
  <RingLoader color='#cc6633' cssOverride={{ display: 'block', margin: 'auto' }} size={size} />
);

Preloader.propTypes = {
  size: PropTypes.number,
};
