import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ListItem, Button } from '../../components';
import { itemListStyles } from './styles';
import { itemListPropTypes } from './propTypes';

const ItemList = ({
  show,
  items,
  onAddItem,
  onSelectItem,
  onEditItem,
  onDeleteItem,
}) => {
  const handleSelect = (e, id) => {
    onSelectItem && onSelectItem(e, id);
  };
  const handleEdit = id => {
    onEditItem && onEditItem(id);
  };
  const handleDelete = id => {
    onDeleteItem && onDeleteItem(id);
  };
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
              <ListItem
                key={item.id}
                onSelect={e => {
                  handleSelect(e, item.id);
                }}
                onEdit={() => {
                  handleEdit(item.id);
                }}
                onDelete={() => {
                  handleDelete(item.id);
                }}
                selected={item.completed}
                text={item.name}
                secondaryText={item.description}
              />
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
  onSelectItem: () => {},
  onDeleteItem: () => {},
};
ItemList.propTypes = itemListPropTypes;

export default ItemList;
