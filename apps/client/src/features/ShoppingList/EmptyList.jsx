import Box from '@mui/material/Box';
import { EmptyState, Button } from '../../components';
import { emptyListPropTypes } from './propTypes';

const EmptyList = ({ show, onAddItem }) => {
  if (show) {
    return (
      <Box sx={{ marginTop: 14 }}>
        <EmptyState msg="Your shopping list is empty :(">
          <Button onClick={onAddItem}>Add your first item</Button>
        </EmptyState>
      </Box>
    );
  }
  return null;
};

EmptyList.propTypes = emptyListPropTypes;
EmptyState.defaultProps = {
  show: false,
  onAddItem: () => {},
};

export default EmptyList;
