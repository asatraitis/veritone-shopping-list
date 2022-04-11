import { BUTTON_BLUE, TEXT_BLACK } from '../../common/colors';

const buttonStyles = {
  textTransform: 'unset',
  fontFamily: 'Nunito',
  fontWeight: 600,
};

export const buttonContainedStyles = {
  ...buttonStyles,
  backgroundColor: BUTTON_BLUE,
};

export const buttonTextStyles = {
  ...buttonStyles,
  color: TEXT_BLACK,
};
