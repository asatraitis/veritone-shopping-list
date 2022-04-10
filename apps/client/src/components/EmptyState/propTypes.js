import PropTypes from 'prop-types';

export const emptyStatePropTypes = {
  msg: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
