import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import {
  itemsSelector,
  updateCurrentItem,
  resetCurrentitem,
} from './itemsSlice';
import EmptyList from './EmptyList';
import Spinner from './Spinner';
import { shoppingListContainerList } from './styles';
import { getItems } from './reducers/extraReducers';
import { ItemModal } from '../../components';

const ShoppingList = () => {
  const { items, currentItem, isLoading } = useSelector(itemsSelector);
  const dispatch = useDispatch();

  const [isOpenAddItem, setAddItem] = useState(false);
  const closeAddItem = () => {
    setAddItem(false);
    dispatch(resetCurrentitem());
  };
  const handleAddItem = () => {
    // TODO: add item
    setAddItem(true);
  };
  const handleAddItemChange = e => {
    const { value, name } = e.target;
    const payload = { value, name };
    dispatch(updateCurrentItem(payload));
  };

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <Box className="shopping-list-container" sx={shoppingListContainerList}>
      <EmptyList show={!items.length && !isLoading} onAddItem={handleAddItem} />
      <Spinner show={isLoading} />
      <ItemModal
        open={isOpenAddItem}
        onClose={closeAddItem}
        onFieldUpdate={handleAddItemChange}
        item={currentItem}
      />
    </Box>
  );
};

export default ShoppingList;
