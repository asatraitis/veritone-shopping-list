import PropTypes from 'prop-types';

export const listItemPropTypes = {
  selected: PropTypes.bool,
  onSelected: PropTypes.func,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
};
