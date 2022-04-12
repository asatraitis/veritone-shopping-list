import PropTypes from 'prop-types';

export const selectAmountPropTypes = {
  value: PropTypes.number,
  onSelect: PropTypes.func,
  amount: PropTypes.number,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};
