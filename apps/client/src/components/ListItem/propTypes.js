import PropTypes from 'prop-types';

export const listItemPropTypes = {
  id: PropTypes.number,
  selected: PropTypes.bool,
  onSelected: PropTypes.func,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
};
