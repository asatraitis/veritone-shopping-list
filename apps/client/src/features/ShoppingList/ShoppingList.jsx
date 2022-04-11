import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { itemsSelector } from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import { shoppingListContainerList } from './styles';
import { getItems } from './reducers/extraReducers';

const ShoppingList = () => {
  const { items, currentItem, isLoading } = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    // TODO: add item
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Box className="shopping-list-container" sx={shoppingListContainerList}>
      <EmptyList show={!items.length && !isLoading} onAddItem={handleAddItem} />
      <Spinner show={isLoading} />
    </Box>
  );
};

export default ShoppingList;
