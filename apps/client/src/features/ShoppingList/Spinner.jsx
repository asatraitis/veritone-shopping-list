import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { spinnerPropTypes } from './propTypes';
import { spinnerStyles } from './styles';

const Spinner = ({ show }) => {
  if (show) {
    return (
      <Box sx={{ display: 'flex', marginTop: 14 }}>
        <CircularProgress sx={spinnerStyles} size={80} thickness={2} />
      </Box>
    );
  }
  return null;
};

Spinner.defaultProps = {
  show: false,
};
Spinner.propTypes = spinnerPropTypes;

export default Spinner;
