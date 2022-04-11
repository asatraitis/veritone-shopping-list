import PropTypes from 'prop-types';

export const listItemPropTypes = {
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  text: PropTypes.string,
  secondaryText: PropTypes.string,
};
