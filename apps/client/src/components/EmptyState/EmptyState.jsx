import Box from '@mui/material/Box';
import { emptyStateContainer, emptyStateMsg } from './styles';
import { emptyStatePropTypes } from './propTypes';

const EmptyState = ({ msg, children }) => (
  <Box sx={emptyStateContainer}>
    <Box sx={emptyStateMsg}>{msg}</Box>
    {children}
  </Box>
);

EmptyState.propTypes = emptyStatePropTypes;
EmptyState.defaultProps = {
  msg: 'Empty State :(',
};
export default EmptyState;
