import PropTypes from 'prop-types';

export const emptyListPropTypes = {
  show: PropTypes.bool,
  onAddItem: PropTypes.func,
};

export const spinnerPropTypes = {
  show: PropTypes.bool,
};

export const itemListPropTypes = {
  show: PropTypes.bool,
  items: PropTypes.array,
  onAddItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func,
};
