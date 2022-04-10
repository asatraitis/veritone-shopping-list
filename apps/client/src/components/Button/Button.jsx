import MuiButton from '@mui/material/Button';
import { buttonContainedStyles, buttonTextStyles } from './styles';
import { buttonPropTypes } from './propTypes';

const variantButtonStyles = {
  contained: buttonContainedStyles,
  text: buttonTextStyles,
};

const Button = ({ children, variant, ...rest }) => (
  <MuiButton {...rest} variant={variant} sx={variantButtonStyles[variant]}>
    {children}
  </MuiButton>
);

Button.propTypes = buttonPropTypes;
Button.defaultProps = {
  variant: 'contained',
};

export default Button;
