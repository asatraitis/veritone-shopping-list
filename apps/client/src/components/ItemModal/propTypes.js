import PropTypes from 'prop-types';

export const itemModalPropTypes = {
  variant: PropTypes.oneOf(['add', 'edit']),
  item: PropTypes.object,
  validations: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onSave: PropTypes.func,
  onFieldUpdate: PropTypes.func,
};
