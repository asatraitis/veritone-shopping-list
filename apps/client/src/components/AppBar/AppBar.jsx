import Box from '@mui/material/Box';
import { appBarPropTypes } from './propTypes';
import { appBarStyles } from './styles';

const AppBar = ({ title }) => (
  <Box component="header" sx={appBarStyles}>
    {title}
  </Box>
);

AppBar.propTypes = appBarPropTypes;
AppBar.defaultProps = {
  title: 'App Bar',
};

export default AppBar;
