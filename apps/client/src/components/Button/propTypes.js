import PropTypes from 'prop-types';

export const buttonPropTypes = {
  variant: PropTypes.oneOf(['contained', 'text']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
