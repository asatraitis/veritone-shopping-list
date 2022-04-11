import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, Button } from '../../components';
import { itemListStyles } from './styles';
import { itemListPropTypes } from './propTypes';

const ItemList = ({ show, items, onAddItem }) => {
  if (show) {
    return (
      <Box
        sx={itemListStyles.itemListContainerStyles}
        className="items-list-container"
      >
        <Box
          sx={itemListStyles.itemListHeaderStyles}
          className="items-list-header"
        >
          <Typography sx={itemListStyles.itemListTextStyles}>
            Your Items
          </Typography>
          <Button onClick={onAddItem}>Add Item</Button>
        </Box>
        <Box component="ul" sx={itemListStyles.itemListUlStyles}>
          {items.map(item => {
            return (
              <Box key={item.id} component="li">
                <ListItem text={item.name} secondaryText={item.description} />
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
  return null;
};

ItemList.defaultProps = {
  show: false,
  items: [],
  onAddItem: () => {},
};
ItemList.propTypes = itemListPropTypes;

export default ItemList;
