import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { itemsSelector } from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import { shoppingListContainerList } from './styles';

const ShoppingList = () => {
  const { items, currentItem, isLoading } = useSelector(itemsSelector);

  const handleAddItem = () => {
    // TODO: add item
  };

  return (
    <Box className="shopping-list-container" sx={shoppingListContainerList}>
      <EmptyList show={!items.length && !isLoading} onAddItem={handleAddItem} />
      <Spinner show={isLoading} />
    </Box>
  );
};

export default ShoppingList;
